import { View, Text, ScrollView, Alert, RefreshControl } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryCard, { productCategoryList } from "../components/CategoryCard";
import { checkConnected } from "../features/isConnected";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { addProducts } from "../features/productSlice";
import { fetchAllProducts } from "../apiBuilder";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
const Category = ({ navigation }) => {
  const [connectStatus, setConnectStatus] = useState(false);
  const dispatch = useDispatch();
  checkConnected().then((res) => {
    setConnectStatus(res);
  });
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    netConnected();
    wait(2000).then(() => setRefreshing(false));
  }, []);
  // console.log("Internet :- ", connectStatus);
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("products", value);
    } catch (e) {
      // saving error
      Alert.alert("Error", "Something went wrong", {
        text: "OK",
      });
    }
  };
  useEffect(() => {
    connectStatus ? netConnected() : getData();
  }, []);

  const netConnected = async () => {
    const token = await AsyncStorage.getItem("token");
    await fetchAllProducts(token)
      .then((resp) => {
        storeData(JSON.stringify(resp.data.result));
        dispatch(addProducts(resp.data.result));
      })
      .catch((err) => {
        Alert.alert("Error", `${err.response.data.message}`, [
          { text: "Cancel" },
        ]);
      });
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("products");
      if (value !== null) {
        dispatch(addProducts(JSON.parse(value)));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const productCategories = productCategoryList;
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1, padding: 15 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <CategoryCard
          productCategories={productCategories}
          navigation={navigation}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Category;

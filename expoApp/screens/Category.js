import { View, Text, ScrollView, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryCard, { productCategoryList } from "../components/CategoryCard";
import { checkConnected } from "../features/isConnected";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ProductList } from "../ProductList";
import { useDispatch } from "react-redux";
import { addProducts } from "../features/productSlice";
import { fetchAllProducts } from "../apiBuilder";

const Category = ({ navigation }) => {
  const [connectStatus, setConnectStatus] = useState(false);
  const dispatch = useDispatch();
  checkConnected().then((res) => {
    setConnectStatus(res);
  });
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

  const netConnected = async () => {
    const token = await AsyncStorage.getItem("token");
    await fetchAllProducts(token)
      .then((resp) => {
        // console.log(resp.data);
        storeData(JSON.stringify(resp.data.result));
        dispatch(addProducts(resp.data.result));
      })
      .catch((err) => {
        Alert.alert("Error", `${err.response.data.message}`, [
          { text: "Cancel", onPress: () => console.log("OK Pressed") },
        ]);
      });
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("products");
      if (value !== null) {
        // value previously stored
        // console.log(JSON.parse(value));
      }
    } catch (e) {
      console.log(e);
      // error reading value
    }
  };
  getData();

  {
    connectStatus ? netConnected() : null;
  }
  const productCategories = productCategoryList;
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1, padding: 15 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CategoryCard
          productCategories={productCategories}
          navigation={navigation}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Category;

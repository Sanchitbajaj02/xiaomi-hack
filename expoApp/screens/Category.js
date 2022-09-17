import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryCard, { productCategoryList } from "../components/CategoryCard";
import { checkConnected } from "../features/isConnected";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ProductList } from "../ProductList";
import { useDispatch } from "react-redux";
import { addProducts } from "../features/productSlice";

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
      alert(e);
    }
  };
  const netConnected = () => {
    storeData(JSON.stringify(ProductList));
    dispatch(addProducts(ProductList));
  };
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

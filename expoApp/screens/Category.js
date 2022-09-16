import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryCard, { productCategoryList } from "../components/CategoryCard";

const Category = ({ navigation }) => {
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

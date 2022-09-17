import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Divider } from "react-native-elements";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../features/productSlice";

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    color: "#000",
    margin: 20,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
    color: "#000",
  },
});

export default function RestaurantDetail({ route, navigation }) {
  const allProducts = useSelector(selectAllProducts);
  const category = route.params.category;
  const products = allProducts.filter((item) => {
    return item.productCategory === category;
  });

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {products.map((food, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.navigate("SingleProduct", {
                name: food.productName,
                product: food,
              })
            }
          >
            <View style={styles.menuItemStyle}>
              <View style={{ width: 240, justifyContent: "space-evenly" }}>
                <Text style={styles.titleStyle}>{food.productName}</Text>
              </View>
            </View>
            <Divider
              width={0.5}
              orientation="vertical"
              style={{ marginHorizontal: 20 }}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

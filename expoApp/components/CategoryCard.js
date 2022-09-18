import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export const productCategoryList = [
  {
    name: "Television",
    category: "television",
    img: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1642760767.3293196.png?width=200&height=200",
  },
  {
    name: "Phone",
    category: "phone",
    img: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1646677552.54578474.png?width=200&height=200",
  },
  {
    name: "Laptop",
    category: "laptop",
    img: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1648710112.01265192.jpg?width=200&height=200",
  },
  {
    name: "Accessories",
    category: "pc-accessories",
    img: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1578894892.69244518.jpg?width=200&height=200",
  },
  {
    name: "Bands and Fitness",
    category: "bands-fitness",
    img: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1624301201.40829012.jpg?width=200&height=200",
  },
];

export default function RestaurantItems({ navigation, ...props }) {
  return (
    <>
      {props.productCategories.map((category, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={{
            marginBottom: 10,
          }}
          onPress={() =>
            navigation.navigate("Products", {
              name: category.name,
              category: category?.category,
            })
          }>
          <View
            style={{
              marginTop: 3,
              padding: 15,
              backgroundColor: "white",
              borderRadius: 10,
              shadowColor: "#171717",
              shadowOffset: { width: 2, height: 4 },
              shadowOpacity: 0.5,
              shadowRadius: 3,
              elevation: 10,
            }}>
            <CategoryImage image={category.img} />
            <CategoryInfo name={category.name} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const CategoryImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: "100%", height: 180, borderRadius: 10 }}
    />
  </>
);

const CategoryInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20,
    }}>
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold", color: "black" }}>
        {props.name}
      </Text>
    </View>
  </View>
);

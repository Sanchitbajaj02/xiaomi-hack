import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../features/cartSlice";

const SingleProduct = ({ route, navigation }) => {
  const [activeTab, setActiveTab] = React.useState(
    route.params.product.productType[0].variant
  );
  const [price, setPrice] = React.useState(
    route.params.product.productType[0].price
  );
  const [color, setColor] = React.useState(
    route.params.product.productColor[0]
  );
  React.useEffect(() => {
    const name = route.params.product.productType.filter((item) => {
      return item.variant === activeTab;
    });
    setPrice(name[0].price);
  }, [activeTab]);
  const productToDispatch = {
    productId: route.params.product._id,
    variantId: route.params.product.productType.filter((item) => {
      return item.variant === activeTab;
    })[0]._id,
    color: color,
    price: price,
    productName: route.params.product.productName,
  };

  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(addTocart(productToDispatch));
    alert("Item added to cart");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{route.params.product.title}</Text>
      <Text style={styles.title}>
        {activeTab}, {color}
      </Text>
      <Text style={styles.title}>₹{price}</Text>

      <Text style={styles.title}>Variant</Text>
      <View style={{ flexDirection: "row" }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          styles={{ padding: 20, outerHeight: 20 }}
        >
          {route.params.product.productType.map((item, index) => (
            <HeaderButton
              style={{
                marginRight: 10,
              }}
              text={item.variant}
              btnColor="black"
              textColor="white"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              key={index}
            />
          ))}
        </ScrollView>
      </View>
      <Text style={styles.title}>Color</Text>
      <View style={{ flexDirection: "row" }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          styles={{ padding: 20, outerHeight: 20 }}
        >
          {route.params.product.productColor.map((item, index) => (
            <HeaderButton
              style={{
                marginRight: 10,
              }}
              text={item}
              btnColor="black"
              textColor="white"
              activeTab={color}
              setActiveTab={setColor}
              key={index}
            />
          ))}
        </ScrollView>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "black",
          paddingVertical: 16,
          borderRadius: 10,
          alignItems: "center",
          marginTop: 25,
        }}
        onPress={addItemToCart}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "700",
          }}
        >
          Add To Cart
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "black",
          paddingVertical: 16,
          borderRadius: 10,
          alignItems: "center",
          marginTop: 25,
        }}
        onPress={() => navigation.navigate("Cart")}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "700",
          }}
        >
          View Cart
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  title: {
    fontSize: 20,
    color: "#000",
  },
});
export default SingleProduct;

const HeaderButton = (props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.activeTab === props.text ? "black" : "#f2f2f2",
        paddingVertical: 16,
        paddingHorizontal: 26,
        borderRadius: 30,
        marginTop: 20,
      }}
      onPress={() => props.setActiveTab(props.text)}
    >
      <Text
        style={{
          color: props.activeTab === props.text ? "white" : "black",
          fontSize: 15,
          fontWeight: "900",
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

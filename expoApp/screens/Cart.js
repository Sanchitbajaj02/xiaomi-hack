import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromcart, selectcartTotal } from "../features/cartSlice";
import { ProductList } from "../ProductList";
import { Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const total = useSelector(selectcartTotal);
  const removeItemFromCart = (id) => {
    if (!items.length > 0) return;
    dispatch(removeFromcart(id));
  };
  const len = items.length;
  return (
    <View style={{ justifyContent: "space-between", flex: 1 }}>
      {len == 0 ? (
        <View
          style={{ alignItems: "center", flex: 1, justifyContent: "center" }}
        >
          <Text style={{ color: "#000" }}>No items in cart</Text>
        </View>
      ) : (
        <View style={{ justifyContent: "space-between", flex: 1 }}>
          <ScrollView style={{ paddingHorizontal: 20 }}>
            {items.map((item, index) => (
              <View key={index}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingVertical: 15,
                  }}
                >
                  <View>
                    <Text
                      style={{
                        color: "#000",
                        fontSize: 18,
                        fontWeight: "bold",
                      }}
                    >
                      {
                        ProductList.find((i) => i._id === item.productId)
                          .productName
                      }
                    </Text>
                    <Text style={{ color: "#000" }}>
                      {
                        ProductList.find(
                          (i) => i._id === item.productId
                        ).productType.filter((i) => i._id === item.variantId)[0]
                          .variant
                      }
                    </Text>
                    <Text style={{ color: "#000" }}>
                      Color : {item.color.toUpperCase()}
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: "#000", paddingRight: 25 }}>
                      {item.price}
                    </Text>
                    <TouchableOpacity
                      onPress={() => removeItemFromCart(item.productId)}
                    >
                      {/* <Text style={{ color: "#000" }}>Remove</Text> */}
                      <Icon name="delete" size={25} color="#000" />
                    </TouchableOpacity>
                  </View>
                </View>
                <Divider
                  width={0.5}
                  orientation="vertical"
                  style={{ marginHorizontal: 20 }}
                />
              </View>
            ))}
          </ScrollView>
          <View
            style={{
              backgroundColor: "#fff",
              paddingVertical: 40,
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
            }}
          >
            <View
              style={{
                justifyContent: "space-between",
                paddingHorizontal: 20,
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  color: "#000",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                Total Cart Value :-
              </Text>
              <Text
                style={{
                  color: "#000",
                  fontSize: 18,
                  fontWeight: "bold",
                  paddingRight: 20,
                }}
              >
                {total}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "black",
                paddingVertical: 16,
                borderRadius: 10,
                alignItems: "center",
                marginTop: 25,
                marginHorizontal: 20,
              }}
              onPress={() => navigation.navigate("CustomerDetail")}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  fontWeight: "700",
                }}
              >
                Checkout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {/* <View
        style={{
          padding: 20,
          // marginBottom: 10,
        }}> */}

      {/* </View> */}
    </View>
  );
};

export default Cart;

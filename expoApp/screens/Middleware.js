import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Divider } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { checkConnected } from "../features/isConnected";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createOrder, fetchAllOrder } from "../apiBuilder";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
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

const Middleware = () => {
  const [connectStatus, setConnectStatus] = useState(true);
  const [orderStatus, setOrderStatus] = useState(true);
  const [orders, setOrders] = useState(false);
  checkConnected().then((res) => {
    setConnectStatus(res);
  });
  const navigation = useNavigation();
  const bill = async () => {
    const token = await AsyncStorage.getItem("token");
    const order = await AsyncStorage.getItem("order");
    if (connectStatus) {
      await createOrder(token, order)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          Alert.alert("Error", `${err.response.data.message}`, [
            { text: "Cancel", onPress: () => console.log("OK Pressed") },
          ]);
        });
    }
  };
  //   useEffect(() => {
  //     bill();
  //   }, []);
  const getOrder = async () => {
    const token = await AsyncStorage.getItem("token");
    await fetchAllOrder(token)
      .then((resp) => {
        setOrders(resp.data.result);
      })
      .catch((err) => {
        Alert.alert("Error", `${err.response.data.message}`, [
          { text: "Cancel" },
        ]);
      });
  };
  useEffect(() => {
    getOrder();
  }, []);
  const logout = async () => {
    await AsyncStorage.removeItem("token");
    navigation.navigate("Login");
  };
  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      <View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("AllOrder", {
              orders: orders,
            })
          }
        >
          <View style={styles.menuItemStyle}>
            <View style={{ width: 240, justifyContent: "space-evenly" }}>
              <Text style={styles.titleStyle}>All Orders</Text>
            </View>
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Category")}>
          <View style={styles.menuItemStyle}>
            <View style={{ width: 240, justifyContent: "space-evenly" }}>
              <Text style={styles.titleStyle}>Create Order</Text>
            </View>
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ margin: 20 }}>
        <TouchableOpacity onPress={logout}>
          <Text style={styles.titleStyle}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Middleware;

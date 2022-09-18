import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { DataTable } from "react-native-paper";
import { checkConnected } from "../features/isConnected";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchAllOrder } from "../apiBuilder";

const AllOrder = ({ route }) => {
  const [connectStatus, setConnectStatus] = useState(true);
  // const [orders, setOrders] = useState(false);
  checkConnected().then((res) => {
    setConnectStatus(res);
  });
  //   const getOrder = async () => {
  //     const token = await AsyncStorage.getItem("token");
  //     await fetchAllOrder(token)
  //       .then((resp) => {
  //         console.log(resp.data.result);
  //         setOrders(resp.data.result);
  //       })
  //       .catch((err) => {
  //         Alert.alert("Error", `${err.response.data.message}`, [
  //           { text: "Cancel" },
  //         ]);
  //       });
  //   };
  //   useEffect(() => {
  //     getOrder();
  //   }, []);
  return (
    <View style={{ padding: 20 }}>
      {connectStatus ? (
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Customer Name</DataTable.Title>
            <DataTable.Title numeric>Amount</DataTable.Title>
            <DataTable.Title numeric>Date</DataTable.Title>
          </DataTable.Header>
          {route.params.orders?.map((order) => (
            <DataTable.Row key={order._id}>
              <DataTable.Cell>{order.customerID.customerName}</DataTable.Cell>
              <DataTable.Cell numeric>{order.paymentAmount}</DataTable.Cell>
              <DataTable.Cell numeric>
                {order.paymentDate.slice(0, 10)}
              </DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
      ) : (
        <Text>Not connected</Text>
      )}
    </View>
  );
};

export default AllOrder;

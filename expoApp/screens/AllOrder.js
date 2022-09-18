import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { DataTable } from "react-native-paper";
import { checkConnected } from "../features/isConnected";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchAllOrder } from "../apiBuilder";
import { ScrollView } from "react-native";

const AllOrder = ({ route }) => {
  const [connectStatus, setConnectStatus] = useState(true);
  checkConnected().then((res) => {
    setConnectStatus(res);
  });

  return (
    <View style={{ padding: 20 }}>
      <ScrollView>
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
      </ScrollView>
    </View>
  );
};

export default AllOrder;

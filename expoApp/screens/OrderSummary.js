import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import * as Print from "expo-print";
import { shareAsync } from "expo-sharing";
import { PdfCode } from "../features/PDF";
import dateFormat from "dateformat";
import { selectcartTotal } from "../features/cartSlice";
import { Divider } from "react-native-elements";
import { selectAllProducts } from "../features/productSlice";

const OrderSummary = () => {
  const { customerInfo, paymentInfo } = useSelector((state) => state.order);
  const items = useSelector((state) => state.cart.items);
  const allProducts = useSelector(selectAllProducts);
  const GetProductName = (product) => {
    return allProducts.find((i) => i._id === product).productName;
  };
  const total = useSelector(selectcartTotal);
  const invoice = dateFormat(Date.now(), "ddmmyyhhMss");
  const RemaningBalance = 0;
  const generateBill = async () => {
    let html = PdfCode(
      customerInfo.customerName,
      customerInfo.customerNumber,
      customerInfo.customerEmail,
      customerInfo.customerAddress,
      customerInfo.customerState,
      customerInfo.customerCity,
      customerInfo.customerZip,
      items,
      total,
      paymentInfo.paymentAmount,
      paymentInfo.paymentType,
      RemaningBalance,
      invoice
    );
    try {
      const { uri } = await Print.printToFileAsync({
        html,
      });
      await shareAsync(uri, { UTI: ".pdf", mimeType: "application/pdf" });
    } catch (err) {
      Alert.alert(
        "Make shure You have Internet Connection or contact @+91 8530730017"
      );
    }
  };
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <ScrollView>
        <View>
          <Text style={style.headText}>Customer Details</Text>
          <View style={{ paddingLeft: 15, paddingVertical: 10 }}>
            <Text style={style.text}>Name: {customerInfo.customerName}</Text>
            <Text style={style.text}>
              Number: {customerInfo.customerNumber}
            </Text>
            <Text style={style.text}>Email: {customerInfo.customerEmail}</Text>
            <Text style={style.text}>
              Address: {customerInfo.customerAddress}
            </Text>
            <Text style={style.text}>State: {customerInfo.customerState}</Text>
            <Text style={style.text}>City: {customerInfo.customerCity}</Text>
            <Text style={style.text}>Postal: {customerInfo.customerZip}</Text>
          </View>
        </View>
        <Divider
          width={0.7}
          orientation="vertical"
          style={{ marginHorizontal: 15, marginVertical: 20 }}
        />
        <View>
          <Text style={style.headText}>Order Details</Text>
          <View style={{ paddingLeft: 15 }}>
            {items.map((product, index) => (
              <View key={index} style={{ paddingVertical: 10 }}>
                <Text style={style.textUp}>
                  {GetProductName(product.productId)}
                </Text>
                <Text style={style.textBot}>{product.color}</Text>
              </View>
            ))}
          </View>
        </View>
        <Divider
          width={0.5}
          orientation="vertical"
          style={{ marginHorizontal: 15, marginVertical: 20 }}
        />
        <View>
          <Text style={style.headText}>Payment Details </Text>
          <View style={{ paddingLeft: 15, paddingVertical: 10 }}>
            <Text style={style.text}>
              Payment Method: {paymentInfo.paymentType}
            </Text>
            <Text style={style.text}>
              Payment Amount: {paymentInfo.paymentAmount}
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              paddingVertical: 16,
              borderRadius: 10,
              alignItems: "center",
              marginTop: 25,
            }}
            onPress={generateBill}
          >
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "700",
              }}
            >
              Generate Bill
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderSummary;
const style = StyleSheet.create({
  headText: {
    fontSize: 25,
    fontWeight: "semi-bold",
  },
  textUp: {
    fontSize: 18,
  },
  textBot: {
    fontSize: 12,
    paddingLeft: 5,
  },
});

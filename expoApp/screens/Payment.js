import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import { useDispatch } from "react-redux";
import { addPaymentInfo } from "../features/orderSlice";
import { useNavigation } from "@react-navigation/native";
export default function Payment() {
  const [current, setCurrent] = useState("Cash");
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const values = [
    {
      label: "Cash",
    },
    {
      label: "Credit Card",
    },
    {
      label: "Debit Card",
    },
    {
      label: "UPI",
    },
  ];
  const paymentInfo = {
    paymentType: current,
    paymentAmount: amount,
  };
  const handleClick = () => {
    if (amount === 0) {
      alert("Please enter the amount");
    }
    dispatch(addPaymentInfo(paymentInfo));
    navigation.navigate("OrderSummary");
  };
  return (
    <View style={{ marginTop: 50, padding: 20 }}>
      <RadioButtonGroup
        selected={current}
        onSelected={(value) => setCurrent(value)}
        radioBackground="green"
      >
        {values.map((item, index) => (
          <RadioButtonItem
            key={index}
            value={item.label}
            label={
              <Text style={{ fontSize: 20, paddingBottom: 10, marginLeft: 10 }}>
                {item.label}
              </Text>
            }
            style={{
              marginBottom: 10,
              justifyContent: "center",
            }}
          />
        ))}
      </RadioButtonGroup>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Amount Recieved</Text>
        <TouchableOpacity>
          <TextInput
            style={styles.inputStyle}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(value) => setAmount(value)}
            value={amount}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            paddingVertical: 16,
            borderRadius: 10,
            alignItems: "center",
            marginTop: 25,
          }}
          onPress={handleClick}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "700",
            }}
          >
            Check Data
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 40,
    backgroundColor: "#fff",
  },
  heroText: {
    color: "#000",
    fontSize: 34,
    fontWeight: "semi-bold",
  },
  inputContainer: {
    marginTop: 20,
  },
  labels: {
    fontSize: 18,
    marginTop: 15,
    color: "#7d7d7d",
    lineHeight: 25,
    marginBottom: 5,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 5,
    fontSize: 18,
    color: "#7d7d7d",
  },
});

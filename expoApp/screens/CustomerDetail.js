import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { addCustomerInfo } from "../features/orderSlice";
import { useNavigation } from "@react-navigation/native";

const CustomerDetail = () => {
  const navigation = useNavigation();
  const detail = useSelector((state) => state.order.customerInfo);
  const [customerData, setCustomerData] = useState({
    customerName: detail.customerName,
    customerEmail: detail.customerEmail,
    customerNumber: detail.customerNumber,
    customerAddress: detail.customerAddress,
    customerCity: detail.customerCity,
    customerState: detail.customerState,
    customerZip: detail.customerZip,
  });
  const dispatch = useDispatch();
  const handleChange = (name, e) => {
    setCustomerData((prev) => {
      return {
        ...prev,
        [name]: e,
      };
    });
  };
  const validate = (name, text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      setCustomerData((prev) => {
        return {
          ...prev,
          [name]: text,
        };
      });
      return false;
    } else {
      setCustomerData((prev) => {
        return {
          ...prev,
          [name]: text,
        };
      });
    }
  };
  const proceedToPayment = () => {
    // if (
    //   customerData.customerName === "" ||
    //   customerData.customerEmail === "" ||
    //   customerData.customerNumber === "" ||
    //   customerData.customerAddress === "" ||
    //   customerData.customerCity === "" ||
    //   customerData.customerState === "" ||
    //   customerData.customerZip === ""
    // ) {
    //   alert("Please fill all the fields");
    //   return;
    // }
    // if (customerData.customerNumber.length !== 10) {
    //   alert("Please enter a valid number");
    //   return;
    // }
    // if (customerData.customerZip.length !== 6) {
    //   alert("Please enter a valid Zip Code");
    //   return;
    // }
    dispatch(addCustomerInfo(customerData));
    navigation.navigate("Payment");
  };

  return (
    <KeyboardAvoidingView style={styles.Container}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <View style={styles.inputContainer}>
              <Text style={styles.labels}>Customer Name</Text>
              <TouchableOpacity>
                <TextInput
                  style={styles.inputStyle}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={(value) => handleChange("customerName", value)}
                  value={customerData.customerName}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.labels}>Customer Email</Text>
              <TouchableOpacity>
                <TextInput
                  style={styles.inputStyle}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={(value) => validate("customerEmail", value)}
                  value={customerData.customerEmail}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.labels}>Customer Phone Number</Text>
              <TouchableOpacity>
                <TextInput
                  style={styles.inputStyle}
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="numeric"
                  onChangeText={(value) =>
                    handleChange("customerNumber", value)
                  }
                  value={customerData.customerNumber}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.labels}>Customer Address</Text>
              <TouchableOpacity>
                <TextInput
                  style={styles.inputStyle}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={(value) =>
                    handleChange("customerAddress", value)
                  }
                  value={customerData.customerAddress}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.labels}>State</Text>
              <TouchableOpacity>
                <TextInput
                  style={styles.inputStyle}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={(value) => handleChange("customerState", value)}
                  value={customerData.customerState}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.labels}>City</Text>
              <TouchableOpacity>
                <TextInput
                  style={styles.inputStyle}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={(value) => handleChange("customerCity", value)}
                  value={customerData.customerCity}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.labels}>PIN Code</Text>
              <TouchableOpacity>
                <TextInput
                  style={styles.inputStyle}
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="numeric"
                  onChangeText={(value) => handleChange("customerZip", value)}
                  value={customerData.customerZip}
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
                onPress={proceedToPayment}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: "700",
                  }}
                >
                  Proceed To Payment
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  heroText: {
    color: "#000",
    fontSize: 34,
    fontWeight: "semi-bold",
  },
  inputContainer: {
    marginTop: 5,
  },
  stateContainer: {
    marginTop: 10,
    flexDirection: "row",
    width: "100%",
    alignSelf: "stretch",
  },
  labels: {
    fontSize: 18,
    marginTop: 10,
    color: "#7d7d7d",
    lineHeight: 25,
    marginBottom: 5,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
    fontSize: 18,
    color: "#7d7d7d",
  },
});
export default CustomerDetail;

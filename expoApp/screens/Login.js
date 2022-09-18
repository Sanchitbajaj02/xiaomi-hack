import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import StoreType from "../components/StoreType";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { operatorLogin } from "../apiBuilder";

const Login = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("MI STORE");
  const [loginData, setLoginData] = useState({
    miID: "",
    password: "",
    storeType: activeTab,
    pos: "",
  });
  const handleChange = (name, e) => {
    setLoginData((prev) => {
      return {
        ...prev,
        [name]: e,
      };
    });
  };
  useEffect(() => {
    setLoginData((prev) => {
      return {
        ...prev,
        storeType: activeTab,
      };
    });
  }, [activeTab]);

  const handleSubmit = () => {
    operatorLogin(loginData)
      .then((res) => {
        storeData(res.data.token);
        if (res.data.token) {
          navigation.navigate("Category");
        }
        // navigation.navigate("Category")
      })
      .catch((err) => {
        Alert.alert("Error", `${err.response.data.message}`, [
          { text: "Cancel", onPress: () => console.log("OK Pressed") },
        ]);
      });
  };

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("token", value);
    } catch (e) {
      // saving error
      Alert.alert("Error", "Something went wrong", {
        text: "OK",
      });
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.Container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Text style={styles.heroText}>Login</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.labels}>Enter Your MI ID</Text>
            <TouchableOpacity>
              <TextInput
                keyboardType="number-pad"
                style={styles.inputStyle}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="1234"
                placeholderTextColor="#C5C5C5"
                onChangeText={(value) => handleChange("miID", value)}
                value={loginData.miID}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.labels}>Enter Your Password</Text>
            <TouchableOpacity>
              <TextInput
                style={styles.inputStyle}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                onChangeText={(value) => handleChange("password", value)}
                value={loginData.password}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <StoreType activeTab={activeTab} setActiveTab={setActiveTab} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.labels}>Point Of Sales(POS)</Text>
            <TouchableOpacity>
              <TextInput
                keyboardType="number-pad"
                style={styles.inputStyle}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(value) => handleChange("pos", value)}
                value={loginData.pos}
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
              onPress={handleSubmit}>
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  fontWeight: "700",
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

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
export default Login;

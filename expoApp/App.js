import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Category from "./screens/Category";
import Product from "./screens/Product";
import SingleProduct from "./screens/SingleProduct";
import { Provider } from "react-redux";
import { store } from "./store";
import Cart from "./screens/Cart";
import CustomerDetail from "./screens/CustomerDetail";
import Payment from "./screens/Payment";
import OrderSummary from "./screens/OrderSummary";
import Icon from "react-native-vector-icons/Feather";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle="light-content"
      />
      <NavigationContainer>
        <Provider store={store}>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Category"
              component={Category}
              options={({ navigation, route }) => ({
                headerRight: () => (
                  <Icon
                    name="shopping-cart"
                    size={30}
                    color="#000"
                    onPress={() => navigation.navigate("Cart")}
                  />
                ),
                title: "All Categories",
                headerTintColor: "#000",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              })}
            />
            <Stack.Screen
              name="Products"
              component={Product}
              options={({ navigation, route }) => ({
                headerRight: () => (
                  <Icon
                    name="shopping-cart"
                    size={30}
                    color="#000"
                    onPress={() => navigation.navigate("Cart")}
                  />
                ),
                title: "All Products",
                headerTintColor: "#000",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              })}
            />
            <Stack.Screen
              name="SingleProduct"
              component={SingleProduct}
              options={({ route }) => ({ title: route.params.name })}
            />
            <Stack.Screen
              name="Cart"
              component={Cart}
              options={{
                title: "Cart",
                headerTintColor: "#000",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />
            <Stack.Screen
              name="CustomerDetail"
              component={CustomerDetail}
              options={{
                title: "Customer Detail",
                headerTintColor: "#000",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />
            <Stack.Screen
              name="Payment"
              component={Payment}
              options={{
                title: "Payment",
                headerTintColor: "#000",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />
            <Stack.Screen
              name="OrderSummary"
              component={OrderSummary}
              options={{
                title: "Order Summary",
                headerTintColor: "#000",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    </>
  );
};

export default App;

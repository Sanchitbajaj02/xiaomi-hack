import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/Login';
import Category from './screens/Category';
import Product from './screens/Product';
import SingleProduct from './screens/SingleProduct';
import {Provider} from 'react-redux';
import {store} from './store';
import Cart from './screens/Cart';
import CustomerDetail from './screens/CustomerDetail';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Category"
            component={Category}
            options={{
              title: 'All Categories',
              headerTintColor: '#000',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="Products"
            component={Product}
            options={{
              title: 'All Products',
              headerTintColor: '#000',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="SingleProduct"
            component={SingleProduct}
            options={({route}) => ({title: route.params.name})}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{
              title: 'Cart',
              headerTintColor: '#000',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="CustomerDetail"
            component={CustomerDetail}
            options={{
              title: 'Customer Detail',
              headerTintColor: '#000',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;

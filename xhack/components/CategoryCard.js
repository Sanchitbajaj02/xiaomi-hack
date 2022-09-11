import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

export const localRestaurants = [
  {
    name: 'Television',
    category: 'television',
    image_url:
      'https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg',
  },
  {
    name: 'Phone',
    category: 'phone',
    image_url:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
  },
  {
    name: 'Laptop',
    category: 'laptop',
    image_url:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
  },
  {
    name: 'Accessories',
    category: 'pc-accessories',
    image_url:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
  },
  {
    name: 'Bands and Fitness',
    category: 'bands-fitness',
    image_url:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
  },
];

export default function RestaurantItems({navigation, ...props}) {
  return (
    <>
      {props.restaurantData.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={{
            marginBottom: 10,
          }}
          onPress={() =>
            navigation.navigate('Products', {
              name: restaurant.name,
              category: restaurant?.category,
            })
          }>
          <View
            style={{
              marginTop: 3,
              padding: 15,
              backgroundColor: 'white',
              borderRadius: 10,
              shadowColor: '#171717',
              shadowOffset: {width: 2, height: 4},
              shadowOpacity: 0.5,
              shadowRadius: 3,
              elevation: 10,
            }}>
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const RestaurantImage = props => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{width: '100%', height: 180, borderRadius: 10}}
    />
  </>
);

const RestaurantInfo = props => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    }}>
    <View>
      <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
        {props.name}
      </Text>
    </View>
  </View>
);

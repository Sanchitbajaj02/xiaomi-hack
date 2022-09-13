import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Divider} from 'react-native-elements';

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: '#000',
    margin: 20,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: '600',
    color: '#000',
  },
});

export default function MenuItems({navigation, foods}) {
  //   const dispatch = useDispatch();

  //   const selectItem = (item, checkboxValue) =>
  //     dispatch({
  //       type: 'ADD_TO_CART',
  //       payload: {
  //         ...item,
  //         restaurantName: restaurantName,
  //         checkboxValue: checkboxValue,
  //       },
  //     });

  //   const cartItems = useSelector(state => state.cartReducer.selectedItems.items);

  //   const isFoodInCart = (food, cartItems) =>
  //     Boolean(cartItems.find(item => item.title === food.title));

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <TouchableOpacity
          key={index}
          onPress={() =>
            navigation.navigate('SingleProduct', {
              name: food.productName,
              product: food,
            })
          }>
          <View style={styles.menuItemStyle}>
            <FoodInfo food={food} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{marginHorizontal: 20}}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const FoodInfo = props => (
  <View style={{width: 240, justifyContent: 'space-evenly'}}>
    <Text style={styles.titleStyle}>{props.food.productName}</Text>
    {/* <Text style={{color: '#000'}}>{props.food.description}</Text> */}
    {/* <Text style={{color: '#000'}}>{props.food.price}</Text> */}
  </View>
);

const FoodImage = ({marginLeft, ...props}) => (
  <View>
    <Image
      source={{uri: props.food.image}}
      style={{
        width: 100,
        height: 100,
        borderRadius: 8,
        marginLeft: marginLeft,
      }}
    />
  </View>
);

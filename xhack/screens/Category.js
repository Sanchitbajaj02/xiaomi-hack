import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CategoryCard, {localRestaurants} from '../components/CategoryCard';
import BottomTabs from '../components/BottomTabs';

const Category = ({navigation}) => {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  return (
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1, padding: 15}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CategoryCard restaurantData={restaurantData} navigation={navigation} />
      </ScrollView>
      <BottomTabs />
    </SafeAreaView>
  );
};

export default Category;

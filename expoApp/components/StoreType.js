import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function StoreType(props) {
  return (
    <View style={{flexDirection: 'row', alignSelf: 'center'}}>
      <HeaderButton
        text="MI STORE"
        btnColor="black"
        textColor="white"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
      <HeaderButton
        text="MI HOME"
        btnColor="white"
        textColor="black"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
    </View>
  );
}

const HeaderButton = props => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.activeTab === props.text ? 'black' : 'white',
        paddingVertical: 16,
        paddingHorizontal: 36,
        borderRadius: 30,
      }}
      onPress={() => props.setActiveTab(props.text)}>
      <Text
        style={{
          color: props.activeTab === props.text ? 'white' : 'black',
          fontSize: 15,
          fontWeight: '900',
        }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

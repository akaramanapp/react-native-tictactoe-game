import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

export default function Square(props) {
  return (
    <TouchableOpacity {...props} onPress={() => props.handleClick(2)}>
      <Text style={{fontSize: 70, color: '#00766c'}}>{props.value}</Text>
    </TouchableOpacity>
  );
}

import React from 'react';
import { Text, View } from 'react-native';

const Icons = ({ name, type }) => {
  return (
    <View>
      <Text>{(name, type)}</Text>
    </View>
  );
};

export default Icons;

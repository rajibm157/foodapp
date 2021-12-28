import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { _Styles, Colors } from '_styles';

const Tabs = ({ onPress, children }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.main, _Styles.allCenter, _Styles.shadow]}>
      <LinearGradient
        colors={Colors.Gradient}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        style={[_Styles.allCenter, styles.button]}>
        {children}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  main: {
    top: -20,
    borderRadius: 30,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});

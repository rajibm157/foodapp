import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { Typography, Colors, _Styles, SIZES } from '_styles';

const CartButton = ({ total, onPress }) => {
  return (
    <LinearGradient
      colors={Colors.Gradient}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}
      style={[_Styles.rowCenter, styles.main]}>
      <TouchableOpacity onPress={() => onPress(total - 1)}>
        <Text style={[Typography.Button, styles.title]}>-</Text>
      </TouchableOpacity>
      <Text style={[Typography.Button, styles.title]}>{total}</Text>
      <TouchableOpacity onPress={() => onPress(total + 1)}>
        <Text style={[Typography.Button, styles.title]}>+</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

CartButton.propTypes = {
  total: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default CartButton;

const styles = StyleSheet.create({
  main: {
    height: 50,
    width: 100,
    borderRadius: 20,
    justifyContent: 'space-evenly',
  },
  title: {
    color: Colors.White,
    padding: SIZES.SCALE_10 / 2,
  },
});

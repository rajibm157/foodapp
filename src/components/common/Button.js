import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { _Styles, Colors, Typography } from '_styles';

const Button = ({ title, onPress, disabled, secondary, style }) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View style={[styles.main, style]}>
        {secondary ? (
          <Text style={styles.buttonTitle}>{title}</Text>
        ) : (
          <LinearGradient
            colors={disabled ? [Colors.Shade3, Colors.Shade3] : Colors.Gradient}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={styles.button}>
            <Text
              style={[
                styles.title,
                { color: disabled ? Colors.Shade2 : Colors.White },
              ]}>
              {title}
            </Text>
          </LinearGradient>
        )}
      </View>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  secondary: PropTypes.bool,
  style: PropTypes.object,
};

export default Button;

const styles = StyleSheet.create({
  main: {
    width: '100%',
  },
  button: {
    padding: 20,
    ..._Styles.allCenter,
    borderRadius: 20,
  },
  title: {
    ...Typography.BodyRegular,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonTitle: {
    ...Typography.Button,
    textAlign: 'center',
    color: Colors.Primary,
  },
});

import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Images } from '_constants';
import { _Styles, Colors, Typography } from '_styles';

const AuthHeader = ({ button, onPress }) => {
  return (
    <View style={[styles.header, _Styles.rowCenterSpace]}>
      <View style={styles.button} />
      <Image source={Images.logo} style={styles.logo} />
      <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          <Text style={[Typography.BodyRegular, styles.buttonTitle]}>
            {button}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 22,
  },
  logo: {
    height: 24,
    width: 34,
    resizeMode: 'contain',
  },
  button: {
    minWidth: 50,
    alignItems: 'flex-end',
  },
  buttonTitle: {
    color: Colors.Primary,
    textDecorationLine: 'underline',
  },
});

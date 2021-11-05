import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Images } from "_constants";
import { Fonts, Colors, _styles } from "_styles";

const GoogleLogin = ({ style, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.main, style]}>
        <Image source={Images.google} style={styles.image} />
        <Text style={styles.title}>Sign-in with Google</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoogleLogin;

const styles = StyleSheet.create({
  main: {
    width: 205,
    height: 50,
    borderRadius: 20,
    ..._styles.rowAllCenter,
    backgroundColor: Colors.White,
  },
  image: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  title: {
    marginLeft: 11,
    ...Fonts.bodyRegular,
    color: Colors.FontColor,
    textDecorationLine: "underline",
  },
});

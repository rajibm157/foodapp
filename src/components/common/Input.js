import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/Feather";
import { _styles, Fonts, Colors } from "_styles";

const Input = ({
  label,
  placeholder,
  value,
  onChange,
  success,
  error,
  secureTextEntry,
  style,
}) => {
  return (
    <View style={[styles.main, style]}>
      <Text style={styles.title}>{label}</Text>
      <View
        style={[
          styles.body,
          {
            borderColor: success
              ? Colors.Accent
              : error
              ? Colors.Primary
              : Colors.Shade3,
          },
        ]}
      >
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={Colors.Shade2}
          value={value}
          onChangeText={onChange}
          style={styles.inputBox}
          secureTextEntry={secureTextEntry}
        />
      </View>
      {!success && error && (
        <View style={styles.footer}>
          <Icon name="alert-triangle" size={24} color={Colors.Primary} />
          <Text style={styles.footerTitle}>{error}</Text>
        </View>
      )}
    </View>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  success: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
  style: PropTypes.object,
};

export default Input;

const styles = StyleSheet.create({
  main: {
    width: "100%",
  },
  title: {
    ...Fonts.caption,
    color: Colors.FontColor,
    paddingLeft: 23,
  },
  body: {
    marginTop: 10,
    paddingLeft: 23,
    paddingVertical: 15,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: Colors.White,
  },
  inputBox: {
    ...Fonts.bodyRegular,
    color: Colors.Shade1,
  },
  footer: {
    marginTop: 10,
    paddingLeft: 23,
    ..._styles.rowCenter,
  },
  footerTitle: {
    marginLeft: 11,
    ...Fonts.caption,
    color: Colors.Primary,
  },
});

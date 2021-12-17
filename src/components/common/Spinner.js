import React from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import { Colors, _Styles } from '_styles';

const Spinner = () => {
  return (
    <View style={[styles.spinner, _Styles.allCenter]}>
      <ActivityIndicator size="large" color={Colors.Accent} />
    </View>
  );
};

export default Spinner;

const styles = StyleSheet.create({
  spinner: {
    padding: 10,
  },
});

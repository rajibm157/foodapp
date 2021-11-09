import React from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import { Colors } from '_styles';

const Spinner = () => {
  return (
    <View style={styles.spinner}>
      <ActivityIndicator size="large" color={Colors.Accent} />
    </View>
  );
};

export default Spinner;

const styles = StyleSheet.create({
  spinner: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

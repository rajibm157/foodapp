import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Spinner } from '_components';
import { Colors, Typography, SIZES } from '_styles';

export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Spinner />
        <Text style={[Typography.Header2, styles.title]}>Loading...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: Colors.Loading_Background,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: Colors.Black,
    textAlign: 'center',
    marginTop: SIZES.SCALE_10 / 2,
  },
});

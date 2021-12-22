import React from 'react';
import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import { Routes } from '_constants';
import { Details, Checkout, Payment, Profile, Success } from '_containers';
import { Colors } from '_styles';

const Stack = createNativeStackNavigator();

export default function AppNavigator({ style }) {
  return (
    <Animated.View style={[styles.container, { ...style }]}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={Routes.Tab}>
        <Stack.Screen name={Routes.Tab} component={TabNavigator} />
        <Stack.Screen name={Routes.Details} component={Details} />
        <Stack.Screen name={Routes.Checkout} component={Checkout} />
        <Stack.Screen name={Routes.Payment} component={Payment} />
        <Stack.Screen name={Routes.Success} component={Success} />
        <Stack.Screen name={Routes.Profile} component={Profile} />
      </Stack.Navigator>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: Colors.White,
  },
});

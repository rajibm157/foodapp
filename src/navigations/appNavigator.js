import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Routes } from '_constants';
import { Home } from '_containers';
import Screens from '_screens';
import CustomDrawer from './CustomDrawer';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Root">
      <Stack.Screen name="Root" component={CustomDrawer} />
    </Stack.Navigator>
  );
}

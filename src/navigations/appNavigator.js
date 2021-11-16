import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Routes } from '_constants';
import { Home } from '_containers';
import Screens from '_screens';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.Home} component={Home} />
    </Stack.Navigator>
  );
}

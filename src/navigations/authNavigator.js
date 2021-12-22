import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from '_constants';
import { Login, Forgot, Register, Reset, Verification } from '_containers';
import Screens from '_screens';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator
      initial={Routes.Onboarding}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={Routes.Onboarding}
        component={Screens.OnboardingScreen}
      />
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.Signup} component={Register} />
      <Stack.Screen name={Routes.Forgot} component={Forgot} />
      <Stack.Screen name={Routes.Reset} component={Reset} />
      <Stack.Screen name={Routes.Verification} component={Verification} />
    </Stack.Navigator>
  );
}

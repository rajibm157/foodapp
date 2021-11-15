import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Routes } from '_constants';
import Screens from '_screens';
import { Login } from '_containers';

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
      <Stack.Screen name={Routes.Signup} component={Screens.RegisterScreen} />
      <Stack.Screen
        name={Routes.Forgot}
        component={Screens.ForgotPasswordScreen}
      />
      <Stack.Screen
        name={Routes.Reset}
        component={Screens.ResetPasswordScreen}
      />
    </Stack.Navigator>
  );
}

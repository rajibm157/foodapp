import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Routes } from "_constants";
import Screens from "_screens";

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator
      initial={Routes.Signup}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={Routes.Login} component={Screens.LoginScreen} />
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

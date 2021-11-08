import * as React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./authNavigator";
import AppNavigator from "./appNavigator";

export default function Navigator() {
  const { isLogedIn } = useSelector((state) => state.auth);

  return (
    <NavigationContainer>
      {isLogedIn ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

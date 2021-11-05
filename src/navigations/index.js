import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./authNavigator";
import AppNavigator from "./appNavigator";

export default function Navigator() {
  return (
    <NavigationContainer>
      <AuthNavigator />
      {/* <AppNavigator /> */}
    </NavigationContainer>
  );
}

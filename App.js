import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import App from "./src";

export default function () {
  return (
    <>
      <App />
      <StatusBar style="auto" />
    </>
  );
}

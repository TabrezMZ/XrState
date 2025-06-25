import './global.css'
import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "./src/navigation/AppNavigator";
import { PropertyProvider } from "./src/context/PropertyContext";

export default function App() {
  return (
    <SafeAreaProvider >
      <StatusBar style="dark" />
      <PropertyProvider>
        <AppNavigator />
      </PropertyProvider>
    </SafeAreaProvider>
  );
}

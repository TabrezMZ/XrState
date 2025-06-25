import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import FilterScreen from "../screens/FilterScreen";
import PropertyDetailScreen from "../screens/PropertyDetailScreen";
import ContactScreen from "../screens/ContactScreen";
import { PropertyProvider } from "../context/PropertyContext";

export type RootStackParamList = {
  Home: undefined;
  Filters: undefined;
  PropertyDetails: { id: string }; // You can change this as per design
  Contact: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <PropertyProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Filters" component={FilterScreen} />
        <Stack.Screen name="PropertyDetails" component={PropertyDetailScreen} />
          <Stack.Screen name="Contact" component={ContactScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PropertyProvider>
  );
}

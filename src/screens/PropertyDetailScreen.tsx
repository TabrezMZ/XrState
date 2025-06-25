import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  NavigationProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { properties } from "../constants/properties";
import { RootStackParamList } from "../navigation/AppNavigator";
import ContactAgentModal from "./ContactScreen";
import ScreenWrapper from "../components/ScreenWrapper";

export default function PropertyDetailScreen() {
  const allTabs = ["Overview", "Features", "Reviews", "Directions"];
  const [activeTab, setActiveTab] = useState(allTabs[0]);
  const [showContact, setShowContact] = useState(false);
  const route = useRoute();
  const { id } = route.params as { id: string };
  const property = properties.find((p) => p.id.toString() === id);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  if (!property) {
    return <Text>Property not found</Text>;
  }

  return (
    <ScreenWrapper scroll={false}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
      <ScrollView className="flex-1">
        {/* Top Image */}
        <View className="relative">
          <Image source={{ uri: property.image }} className="w-full h-72" />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-4 left-4 bg-white p-2 rounded-full shadow"
          >
            <Ionicons name="arrow-back" size={20} color="#111" />
          </TouchableOpacity>
        </View>

        {/* Content */}
        <View className="px-4 pt-4 pb-32">
          {/* Address + Rating */}
          <View className="flex-row justify-between items-center mb-1">
            <Text className="text-gray-500 text-sm">
              📍 {property.location}
            </Text>
            <Text className="text-yellow-500 text-sm">★ {property.rating}</Text>
          </View>

          {/* Title */}
          <Text className="text-xl font-bold mb-2">{property.title}</Text>

          {/* Features */}
          <Text className="text-sm text-gray-500 mb-4">
            {property.features}
          </Text>

          {/* Tabs */}
          <View className="flex-row space-x-2 mb-4">
            {allTabs.map((tab) => (
              <TouchableOpacity
                key={tab}
                onPress={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full ${
                  activeTab === tab ? "bg-[#CFFFCF]" : "bg-gray-100"
                }`}
              >
                <Text
                  className={`text-sm font-medium ${
                    activeTab === tab ? "text-black" : "text-gray-500"
                  }`}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Tab Content */}
          {activeTab === "Overview" && (
            <View>
              <Text className="text-lg font-semibold mb-2">
                Property Details
              </Text>
              <Text className="text-sm text-gray-600 leading-relaxed">
                {property.description}
              </Text>
            </View>
          )}
          {activeTab === "Features" && (
            <View>
              <Text className="text-lg font-semibold mb-2">Features</Text>
              <Text className="text-sm text-gray-600 leading-relaxed">
                {property.features}
              </Text>
            </View>
          )}
          {activeTab === "Reviews" && (
            <View>
              <Text className="text-lg font-semibold mb-2">Reviews</Text>
              <Text className="text-sm text-gray-600 leading-relaxed">
                {property.reviews}
              </Text>
            </View>
          )}
          {activeTab === "Directions" && (
            <View>
              <Text className="text-lg font-semibold mb-2">Directions</Text>
              <Text className="text-sm text-gray-600 leading-relaxed">
                {property.location}
              </Text>
            </View>
          )}
        </View>
      </ScrollView>

      {/* Fixed CTA */}
      <View className="bg-white px-4 py-4 border-t border-gray-200 flex-row items-center justify-between">
        <View>
          <Text className="text-gray-500 text-xs">Rent</Text>
          <Text className="text-lg font-bold text-gray-900">
            {property.price} <Text className="text-xs font-normal">/Month</Text>
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => setShowContact(true)}
          className="bg-green-700 py-4 w-1/2 rounded-xl"
        >
          <Text className="text-white text-center font-semibold">
            Contact Agent
          </Text>
        </TouchableOpacity>
      </View>
      {showContact && (
        <ContactAgentModal
          property={property}
          onClose={() => setShowContact(false)}
        />
      )}
      </KeyboardAvoidingView>
      </ScreenWrapper>
  );
}

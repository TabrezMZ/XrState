import React from "react";
import { View, Text, Image, TextInput } from "react-native";

export default function Header() {
  return (
    <View className="px-4 pt-6 pb-4 bg-white">
      <View className="flex-row justify-between items-center">
        <Text className="text-2xl font-bold text-[#4CAF50]">XState</Text>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=3" }}
          className="w-10 h-10 rounded-full"
        />
      </View>

      <View className="mt-4 rounded-xl bg-gray-100 px-4 py-3">
        <TextInput
          placeholder="Search Address, city, zip"
          placeholderTextColor="#888"
          className="text-base"
        />
      </View>
    </View>
  );
}

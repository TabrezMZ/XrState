import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  features: string;
  rating?: number;
  onPress?: () => void;
}

export default function PropertyCard({
  image,
  title,
  location,
  price,
  features,
  rating,
  onPress,
}: PropertyCardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-white rounded-2xl overflow-hidden shadow-sm mb-4"
    >
      <Image source={{ uri: image }} className="w-full h-48" />
      <View className="p-4">
        <Text className="text-sm text-gray-500 mb-1">{features}</Text>
        <Text className="text-base font-semibold mb-1">{title}</Text>
        <Text className="text-sm text-gray-600 mb-2">{location}</Text>
        <View className="flex-row justify-between items-center">
          <Text className="text-lg font-bold text-[#4CAF50]">{price}</Text>
          {rating && <Text className="text-yellow-500">⭐ {rating}</Text>}
        </View>
      </View>
    </TouchableOpacity>
  );
}

import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface FilterChipProps {
  label: string;
  active?: boolean;
  onPress?: () => void;
}

export default function FilterChip({ label, active, onPress }: FilterChipProps) {
  return (
    <TouchableOpacity
      className={`px-4 py-2 mr-2 mb-2 rounded-full border ${
        active ? "bg-[#4CAF50] border-[#4CAF50]" : "bg-white border-gray-300"
      }`}
      onPress={onPress}
    >
      <Text className={`${active ? "text-white" : "text-gray-700"} font-medium`}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

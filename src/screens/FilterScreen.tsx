import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { useState } from "react";

export default function FilterScreen({ onClose }: { onClose: () => void }) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [selectedFacility, setSelectedFacility] = useState<string[]>([]);

  const facilities = ["Parking", "Kitchen", "Free Wifi", "Garden", "Pool"];

  const toggleFacility = (item: string) => {
    setSelectedFacility((prev) =>
      prev.includes(item)
        ? prev.filter((f) => f !== item)
        : [...prev, item]
    );
  };

  return (
    <View className="absolute inset-0 bg-black/30 justify-end">
      <View className="bg-white rounded-t-3xl px-4 pt-6 pb-10">
        {/* Header */}
       
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-xl font-semibold">Filters</Text>
          <TouchableOpacity
          onPress={onClose}
          className="absolute right-4 z-10 bg-white rounded-full p-2"
        >
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
        </View>

        {/* Tabs */}
        <View className="flex-row justify-between mb-4">
          {["For Sale", "For Rent", "For Buy"].map((item) => (
            <TouchableOpacity
              key={item}
              className={`px-4 py-2 rounded-full ${
                item === "For Rent" ? "bg-black" : "bg-gray-100"
              }`}
            >
              <Text
                className={`${
                  item === "For Rent" ? "text-white" : "text-gray-600"
                } text-sm font-medium`}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* City + Country */}
        <View className="flex-row space-x-4 mb-4">
          <TextInput
            placeholder="New York"
            className="border border-gray-300 rounded-lg flex-1 px-3 py-2 text-sm"
          />
          <TextInput
            placeholder="United States"
            className="border border-gray-300 rounded-lg flex-1 px-3 py-2 text-sm"
          />
        </View>

        {/* Category */}
        <View className="flex-row flex-wrap gap-2 mb-4">
          {["Apartments", "House", "All", "Hotel", "Penthouse", "Land", "Villa"].map((item) => (
            <TouchableOpacity key={item} className={` px-4 py-2 rounded-full ${item ===   "All" ? "bg-black text-white" : "bg-gray-100"}`}>
              <Text className={`text-sm ${item ===   "All" ? "text-white" : "text-gray-700"}`}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

         {/* Price Range */}
         <Text className="text-sm font-medium mb-1">Price Range</Text>
        <View className="flex-row justify-between mb-1">
          <Text className="bg-black text-white px-3 py-1 rounded-md text-xs">${minPrice}</Text>
          <Text className="bg-black text-white px-3 py-1 rounded-md text-xs">${maxPrice}</Text>
        </View>
        <Slider
          style={{ width: "100%", height: 40 }}
          minimumValue={0}
          maximumValue={5000}
          step={100}
          value={minPrice}
          onValueChange={(value: number) => setMinPrice(value)}
          minimumTrackTintColor="#4CAF50"
          maximumTrackTintColor="#ddd"
        />
       

        {/* Room & Bathroom Dropdowns */}
        <View className="flex-row justify-between mb-4 mt-4">
          <View className="w-[48%] border border-gray-300 rounded-lg px-3 py-2">
            <Text className="text-gray-700 text-sm">3 Rooms</Text>
          </View>
          <View className="w-[48%] border border-gray-300 rounded-lg px-3 py-2">
            <Text className="text-gray-700 text-sm">2 Bathrooms</Text>
          </View>
        </View>

        {/* Facility Chips */}
        <Text className="text-sm font-medium mb-1">Facility Place</Text>
        <View className="flex-row flex-wrap gap-2 mb-6">
          {facilities.map((item) => (
            <TouchableOpacity
              key={item}
              onPress={() => toggleFacility(item)}
              className={`px-4 py-2 rounded-full ${
                selectedFacility.includes(item)
                  ? "bg-black"
                  : "bg-gray-100"
              }`}
            >
              <Text
                className={`text-sm ${
                  selectedFacility.includes(item)
                    ? "text-white"
                    : "text-gray-700"
                }`}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Apply Button */}
        <TouchableOpacity className="bg-lime-400 py-4 rounded-xl mt-4">
          <Text className="text-center font-semibold text-black text-base">Apply Filters</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

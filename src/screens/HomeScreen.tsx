import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { PropertyContext } from "../context/PropertyContext";
import FilterScreen from "./FilterScreen";
import ScreenWrapper from "../components/ScreenWrapper";

const categories = ["All", "Apartments", "House", "Villa", "Hotel"];

export default function HomeScreen() {
  const [showFilter, setShowFilter] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const { properties, toggleLike } = useContext(PropertyContext);
  const filteredProperties = properties.filter((p) => {
    const matchesCategory =
      activeCategory === "All" || p.type === activeCategory;

    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.type.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const navigation = useNavigation();

  return (
    <ScreenWrapper>
    <View className="flex-1 bg-white">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-4 pt-6">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-2xl font-bold text-[#4CAF50]">
              Estate<Text className="text-gray-900">Ease</Text>
            </Text>
            <Image
              source={{ uri: "https://i.pravatar.cc/150?img=3" }}
              className="w-10 h-10 rounded-full"
            />
          </View>

          {/* Search Bar */}
          <View className="flex-row items-center bg-gray-100 px-4 py-3 rounded-xl">
            <Feather name="search" size={20} color="#888" />
            <TextInput
              placeholder="Search Address, city, zip."
              value={searchQuery}
              onChangeText={setSearchQuery}
              className="ml-2 flex-1 text-gray-800"
              placeholderTextColor="#999"
            />
          </View>
        </View>

        {/* Category Filter */}
        <ScrollView
          horizontal
          className="px-4 mt-4"
          showsHorizontalScrollIndicator={false}
        >
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat}
              onPress={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full mr-2 border ${
                activeCategory === cat
                  ? "bg-[#4CAF50] border-[#4CAF50]"
                  : "bg-white border-gray-300"
              }`}
            >
              <Text
                className={`text-sm ${
                  activeCategory === cat ? "text-white" : "text-gray-600"
                }`}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Property Cards */}
        <View className="px-4 mt-4 space-y-4 pb-24">
          {filteredProperties?.map((item) => (
            <TouchableOpacity onPress={() => navigation.navigate("PropertyDetails",   { id: item.id.toString() })} key={item.id}>
            <View
              key={item.id}
              className="bg-white rounded-3xl shadow-sm overflow-hidden"
            >
              <View className="relative">
                <Image source={{ uri: item.image }} className="w-full h-52" />
                <View className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full">
                  <Text className="text-xs text-gray-600">{item.type}</Text>
                </View>
                  <TouchableOpacity className="absolute top-3 right-3 bg-white p-2 rounded-full">
                    <Ionicons
                      name={item.liked ? "heart" : "heart-outline"}
                      size={18}
                      color={item.liked ? "#f44336" : "#999"}
                      onPress={() => toggleLike(item.id)}
                    />
                  </TouchableOpacity>
              </View>

              <View className="p-4">
                <Text className="text-sm text-gray-500 mb-1">
                  {item.features}
                </Text>
                <View className="flex-row justify-between items-center">
                  <Text className="text-base font-semibold w-3/4">
                    {item.title}
                  </Text>
                  <View className="items-end">
                    <Text className="text-gray-900 font-bold">
                      {item.price}
                    </Text>
                    <Text className="text-xs text-gray-500">month</Text>
                  </View>
                </View>
                <View className="flex-row justify-between items-center mt-2">
                  <Text className="text-xs text-gray-400">
                    📍 {item.location}
                  </Text>
                  <Text className="text-yellow-500 text-xs">
                    ★ {item.rating}
                  </Text>
                </View>
              </View>
            </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Nav Bar */}
      <View className="absolute bottom-0 left-0 right-0 bg-white py-3 px-6 flex-row justify-between rounded-t-2xl shadow">
        <TouchableOpacity>
          <Ionicons name="home" size={24} color="#4CAF50" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="chatbubble-ellipses-outline" size={22} color="#555" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowFilter(true)} >
          <Ionicons name="search" size={20} color="#555" />
        </TouchableOpacity> 
        <TouchableOpacity>
          <Ionicons name="heart-outline" size={22} color="#555" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="person-outline" size={22} color="#555" />
        </TouchableOpacity>
      </View>
        {showFilter && <FilterScreen  onClose={() => setShowFilter(false)} />}
    </View>
    </ScreenWrapper>
  );
} 

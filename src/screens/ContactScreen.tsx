import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ContactAgentModal({
  onClose,
  property,
}: {
  onClose: () => void;
  property: {
    image: string;
    title: string;
    location: string;
    price: string;
    features: string;
  };
}) {
  const insets = useSafeAreaInsets();

  return (
    <View className="absolute inset-0 bg-black/40 justify-end">
      <View
        className="bg-white rounded-t-3xl px-4 pt-6 pb-8"
        style={{ paddingBottom: insets.bottom + 20 }}
      >
        {/* X Close Icon */}
        <TouchableOpacity
          onPress={onClose}
          className="absolute top-4 left-4 z-10"
        >
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>

        {/* Header Image & Title */}
        <View className="mt-6 mb-4">
          <Text className="text-sm text-gray-500">Contact Agent</Text>
          <Text className="text-lg font-semibold">{property.title}</Text>
          <Text className="text-sm text-gray-400">{property.features}</Text>
          <Text className="text-lg font-bold mt-1 text-black">
            ${property.price}
            <Text className="text-sm text-gray-400 font-normal"> /month</Text>
          </Text>
        </View>

        {/* Contact Form */}
        <View className="space-y-0">
          <View className="flex-row space-x-2 mb-3 ">
            <TextInput
              placeholder="First Name"
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
            <TextInput
              placeholder="Sec Name"
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
          </View>
          <TextInput
            placeholder="You Phone Number"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm mb-3"
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="You Email"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm mb-3"
            keyboardType="email-address"
          />
          <TextInput
            placeholder="Message"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm h-28 text-top mb-3"
            multiline
          />
        </View>

        {/* Send Inquiry Button */}
        <TouchableOpacity className="bg-lime-400 py-4 rounded-xl mt-6">
          <Text className="text-center font-semibold text-black text-base">
            Send Inquiry
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

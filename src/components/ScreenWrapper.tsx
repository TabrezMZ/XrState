// /src/components/ScreenWrapper.tsx

import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, ViewStyle } from 'react-native';
import React from 'react';

type Props = {
  children: React.ReactNode;
  scroll?: boolean;
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;
};

export default function ScreenWrapper({
  children,
  scroll = false,
  style,
  contentContainerStyle,
}: Props) {
  if (scroll) {
    return (
      <SafeAreaView style={[{ flex: 1, backgroundColor: '#fff' }, style]}>
        <ScrollView
          contentContainerStyle={[
            { paddingBottom: 100, paddingHorizontal: 16 },
            contentContainerStyle,
          ]}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={[{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 16 }, style]}
    >
      {children}
    </SafeAreaView>
  );
}

import { Slot } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Header</Text>
      <Slot />
      <Text>Footer</Text>
    </SafeAreaView>
  );
}

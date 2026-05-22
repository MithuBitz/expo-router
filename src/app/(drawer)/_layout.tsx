import Ionicons from "@expo/vector-icons/Ionicons";
import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        drawerActiveTintColor: "#6366f1",
        drawerInactiveTintColor: "#9ca3af",
        drawerStyle: { backgroundColor: "#fff", width: 240 },
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Home",
          title: "Home",
          drawerIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="explore"
        options={{
          drawerLabel: "Explore",
          title: "Explore",
          drawerIcon: ({ color }) => (
            <Ionicons name="compass" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="settings"
        options={{
          drawerLabel: "Settings",
          title: "Settings",
          drawerIcon: ({ color }) => (
            <Ionicons name="settings" size={24} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}

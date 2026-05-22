import Ionicons from "@expo/vector-icons/Ionicons";
import {
  DrawerContentScrollView,
  DrawerItemList,
  type DrawerContentComponentProps,
} from "@react-navigation/drawer";
import Constants from "expo-constants";
import { Link } from "expo-router";
import { Drawer } from "expo-router/drawer";
import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ICON_SIZE = 22;

const palette = {
  light: {
    drawer: "#FFFFFF",
    header: "#FFFFFF",
    screen: "#F8FAFC",
    border: "rgba(15, 23, 42, 0.08)",
    active: "#4F46E5",
    inactive: "#94A3B8",
    activeBg: "rgba(79, 70, 229, 0.12)",
    label: "#0F172A",
    subtitle: "#64748B",
    brandMark: "#FFFFFF",
    brandMarkBg: "#4F46E5",
    overlay: "rgba(15, 23, 42, 0.45)",
    footer: "#94A3B8",
  },
  dark: {
    drawer: "#0F172A",
    header: "#0F172A",
    screen: "#020617",
    border: "rgba(148, 163, 184, 0.12)",
    active: "#818CF8",
    inactive: "#64748B",
    activeBg: "rgba(129, 140, 248, 0.18)",
    label: "#F8FAFC",
    subtitle: "#94A3B8",
    brandMark: "#F8FAFC",
    brandMarkBg: "#4F46E5",
    overlay: "rgba(0, 0, 0, 0.55)",
    footer: "#64748B",
  },
} as const;

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const scheme = useColorScheme() === "dark" ? "dark" : "light";
  const colors = palette[scheme];
  const insets = useSafeAreaInsets();
  const version = Constants.expoConfig?.version ?? "1.0.0";

  return (
    <DrawerContentScrollView
      {...props}
      style={{ backgroundColor: colors.drawer }}
      contentContainerStyle={[
        styles.drawerScroll,
        { paddingBottom: Math.max(insets.bottom, 16) },
      ]}
    >
      <View style={[styles.brand, { paddingTop: insets.top + 8 }]}>
        <View
          style={[styles.brandMark, { backgroundColor: colors.brandMarkBg }]}
        >
          <Ionicons name="logo-ionitron" size={22} color={colors.brandMark} />
        </View>
        <View style={styles.brandText}>
          <Text style={[styles.brandTitle, { color: colors.label }]}>
            My Custom Drawer
          </Text>
          <Text style={[styles.brandSubtitle, { color: colors.subtitle }]}>
            Main navigation
          </Text>
        </View>
      </View>

      <View style={[styles.divider, { backgroundColor: colors.border }]} />

      <DrawerItemList
        {...props}
        state={props.state}
        navigation={props.navigation}
        descriptors={props.descriptors}
      />

      <View style={styles.footer}>
        <View style={[styles.divider, { backgroundColor: colors.border }]} />
        <Link href="/login" asChild>
          <Pressable
            style={({ pressed }) => [
              styles.footerAction,
              pressed && styles.footerActionPressed,
            ]}
          >
            <Ionicons name="log-in-outline" size={18} color={colors.inactive} />
            <Text style={[styles.footerActionLabel, { color: colors.label }]}>
              Sign in
            </Text>
          </Pressable>
        </Link>
        <Text style={[styles.footerVersion, { color: colors.footer }]}>
          v{version}
        </Text>
      </View>
    </DrawerContentScrollView>
  );
}

export default function DrawerLayout() {
  const scheme = useColorScheme() === "dark" ? "dark" : "light";
  const colors = palette[scheme];

  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: true,

        headerStyle: {
          backgroundColor: colors.header,
          ...Platform.select({
            ios: {
              shadowColor: "transparent",
              borderBottomWidth: StyleSheet.hairlineWidth,
              borderBottomColor: colors.border,
            },
            android: { elevation: 0 },
            default: {
              borderBottomWidth: StyleSheet.hairlineWidth,
              borderBottomColor: colors.border,
            },
          }),
        },
        headerTintColor: colors.label,
        headerTitleStyle: {
          fontWeight: "600",
          fontSize: 17,
          color: colors.label,
        },
        sceneContainerStyle: { backgroundColor: colors.screen },
        drawerActiveTintColor: colors.active,
        drawerInactiveTintColor: colors.inactive,
        drawerActiveBackgroundColor: colors.activeBg,
        drawerInactiveBackgroundColor: "transparent",
        drawerLabelStyle: styles.drawerLabel,
        drawerItemStyle: styles.drawerItem,
        drawerStyle: {
          backgroundColor: colors.drawer,
          width: 288,
          borderRightWidth: StyleSheet.hairlineWidth,
          borderRightColor: colors.border,
        },
        overlayColor: colors.overlay,
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Home",
          title: "Home",
          drawerIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={ICON_SIZE}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="explore"
        options={{
          drawerLabel: "Explore",
          title: "Explore",
          drawerIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "compass" : "compass-outline"}
              size={ICON_SIZE}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="settings"
        options={{
          drawerLabel: "Settings",
          title: "Settings",
          drawerIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "settings" : "settings-outline"}
              size={ICON_SIZE}
              color={color}
            />
          ),
        }}
      />
    </Drawer>
  );
}

const styles = StyleSheet.create({
  drawerScroll: {
    flexGrow: 1,
  },
  brand: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  brandMark: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  brandText: {
    flex: 1,
    gap: 2,
  },
  brandTitle: {
    fontSize: 17,
    fontWeight: "700",
    letterSpacing: -0.3,
  },
  brandSubtitle: {
    fontSize: 13,
    fontWeight: "500",
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    marginHorizontal: 16,
    marginBottom: 8,
  },
  drawerLabel: {
    fontSize: 15,
    fontWeight: "500",
    marginLeft: -8,
  },
  drawerItem: {
    borderRadius: 12,
    marginHorizontal: 8,
    paddingHorizontal: 8,
  },
  footer: {
    marginTop: "auto",
    paddingTop: 8,
  },
  footerAction: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginHorizontal: 16,
    marginTop: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  footerActionPressed: {
    opacity: 0.75,
  },
  footerActionLabel: {
    fontSize: 15,
    fontWeight: "500",
  },
  footerVersion: {
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 16,
    marginBottom: 4,
    letterSpacing: 0.3,
  },
});

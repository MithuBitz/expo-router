import { useRouter } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const LoginScreen = () => {
  const router = useRouter();
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button title="Home" onPress={() => router.navigate("/")} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});

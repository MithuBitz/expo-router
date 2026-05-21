import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const LoginScreen = () => {
  return (
    <View>
      <Text>LoginScreen</Text>
      <Link href={"/"}>Home</Link>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});

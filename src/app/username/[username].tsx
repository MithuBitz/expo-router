import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const UsernameScreen = () => {
  const { username } = useLocalSearchParams();
  return (
    <View>
      <Text>UsernameScreen : {username}</Text>
    </View>
  );
};

export default UsernameScreen;

const styles = StyleSheet.create({});

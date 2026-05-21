import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DocsScreen = () => {
  const { techname } = useLocalSearchParams();
  return (
    <View>
      <Text>DocsScreen : {techname}</Text>
    </View>
  );
};

export default DocsScreen;

const styles = StyleSheet.create({});

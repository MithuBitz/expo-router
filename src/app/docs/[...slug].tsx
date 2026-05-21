import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DocsDynamicRoute = () => {
  const { slug } = useLocalSearchParams();

  console.log(slug);

  return (
    <View>
      <Text>
        DocsDynamicRoute {Array.isArray(slug) ? slug.join("/") : slug}{" "}
      </Text>
    </View>
  );
};

export default DocsDynamicRoute;

const styles = StyleSheet.create({});

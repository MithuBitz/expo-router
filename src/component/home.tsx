import { Link, useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Home = () => {
  const router = useRouter();
  return (
    <View>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
      <Link href="/about">About</Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});


import { Link, useRouter } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Home = () => {
  const router = useRouter();
  return (
    <View>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
      <Link href="/about">About</Link>
      <Link href="/profile/details">Profile Details</Link>
      <Link href="/user/145">UserId Page</Link>
      <Link href="/username/mithu">Username Page</Link>
      {/* <Link href="/docs/react">React Docs</Link> */}
      <Button title="Go to Docs" onPress={() => router.navigate('/docs/react')}/>
      <Link href="/docs/react/introduction">React Docs Subtopics</Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

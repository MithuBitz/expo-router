import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SubTopic = () => {
  const { techname, subTopic } = useLocalSearchParams();
  return (
    <View>
      <Text>
        SubTopic : {subTopic} {techname}
      </Text>
    </View>
  );
};

export default SubTopic;

const styles = StyleSheet.create({});

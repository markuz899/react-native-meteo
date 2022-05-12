import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Loading = () => {
  return (
    <LinearGradient style={styles.container} colors={["#ff2929", "#ffa72e"]}>
      <Text>Loading...</Text>
    </LinearGradient>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

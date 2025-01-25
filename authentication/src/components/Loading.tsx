import React from "react";
import { View, ActivityIndicator, StyleSheet, Text } from "react-native";

const Loading = ({ message = "Loading..." }): JSX.Element => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#6200ee" />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },
  text: {
    marginTop: 16,
    fontSize: 16,
    color: "#333",
  },
});

export default Loading;

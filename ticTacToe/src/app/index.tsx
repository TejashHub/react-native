import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icons from "../components/Icons";

const App = () => {
  const [isCross, setIsCross] = useState<string>("");
  return (
    <View style={styles.container}>
      <Icons />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#515151",
  },
});

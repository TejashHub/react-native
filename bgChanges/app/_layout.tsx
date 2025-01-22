import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";

export default function HomeScreen(): JSX.Element {
  const [randomBackground, setRandomBackground] = useState("#ffffff");
  const generateColor = () => {
    const hexRange = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setRandomBackground(color);
  };
  return (
    <>
      <StatusBar backgroundColor={randomBackground} />
      <View style={[styles.container, { backgroundColor: randomBackground }]}>
        <TouchableOpacity onPress={() => generateColor()}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Press Me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d5b8ff",
  },
  button: {
    backgroundColor: "#34246b",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    width: "80%",
    alignSelf: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 15,
    textAlign: "center",
  },
});

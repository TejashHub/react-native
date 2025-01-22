import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

interface ButtonProps {
  label: string;
  press: () => void;
}

const Button = ({ label, press }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={press}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 60,
    width: 60,
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
});

export default Button;

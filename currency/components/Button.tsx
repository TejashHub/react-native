import React from "react";
import type { PropsWithChildren } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type CurrencyButtonProps = PropsWithChildren<{
  flag: string;
  name: string;
  press: () => void;
}>;

const Button = (props: CurrencyButtonProps): JSX.Element => {
  const { flag, name, press } = props;
  return (
    <TouchableOpacity style={styles.button} onPress={press}>
      <Text style={styles.text}>{`${flag}`}</Text>
      <Text style={styles.tag}>{`${name}`}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 100,
    width: 100,
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  text: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  tag: {
    fontSize: 14,
    color: "#2d3436",
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default Button;

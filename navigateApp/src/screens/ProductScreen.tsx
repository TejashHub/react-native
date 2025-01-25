import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ProductScreen = ({ navigation, route }) => {
  const { productId } = route.params || {};

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("About")}
      >
        <Text style={styles.buttonText}>About</Text>
      </TouchableOpacity>
      {productId && (
        <Text style={styles.productIdText}>Product ID: {productId}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Centers content vertically
    alignItems: "center", // Centers content horizontally
    marginHorizontal: 40,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 40,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  productIdText: {
    marginTop: 20,
    fontSize: 14,
    color: "#333",
  },
});

export default ProductScreen;

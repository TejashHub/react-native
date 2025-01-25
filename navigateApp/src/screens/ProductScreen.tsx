import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const ProductScreen = ({ route }) => {
  const { product } = route.params || {};

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: product.imageUri || "default_image_uri_here" }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>
          {product.name || "Product Name Not Available"}
        </Text>
        <View style={[styles.rowContainer, styles.ratingContainer]}>
          <Text style={styles.ratingText}>{product.rating || "0"}⭐</Text>
          <Text style={styles.ratingCount}>
            {product.ratingCount ? product.ratingCount.toLocaleString() : "0"}{" "}
            reviews
          </Text>
        </View>
        <View style={[styles.rowContainer, styles.priceContainer]}>
          <Text style={styles.discountPrice}>
            ₹
            {product.discountPrice
              ? product.discountPrice.toLocaleString()
              : "0"}
          </Text>
          <Text style={styles.originalPrice}>
            <Text style={styles.strikethrough}>₹{product.oldPrice || "0"}</Text>
          </Text>
        </View>
      </View>
      {product.tags &&
      Array.isArray(product.tags) &&
      product.tags.length > 0 ? (
        product.tags.map((tag, index) => (
          <View key={index} style={styles.badge}>
            <Text style={styles.tagBadge}>{tag}</Text>
          </View>
        ))
      ) : (
        <Text>No tags available</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 16,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 12,
    resizeMode: "contain", // Ensures image keeps aspect ratio
    marginBottom: 16,
  },
  textContainer: {
    padding: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  ratingContainer: {
    marginTop: 10,
  },
  ratingText: {
    fontSize: 18,
    color: "#FFA500", // Gold color for stars
  },
  ratingCount: {
    fontSize: 14,
    color: "#888",
  },
  priceContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  discountPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#28a745",
  },
  originalPrice: {
    fontSize: 16,
    color: "#888",
    marginLeft: 12,
  },
  strikethrough: {
    textDecorationLine: "line-through",
    color: "#aaa",
  },
  badge: {
    backgroundColor: "#e0e0e0",
    borderRadius: 12,
    padding: 6,
    margin: 5,
  },
  tagBadge: {
    fontSize: 14,
    color: "#333",
  },
});

export default ProductScreen;

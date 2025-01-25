import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

type ProductProps = {
  product: Product;
};

const ProductItem = ({ product }: ProductProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.imageUri }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <View style={[styles.rowContainer, styles.ratingContainer]}>
          <Text style={styles.ratingText}>{product.rating}⭐</Text>
          <Text style={styles.ratingCount}>
            {product.ratingCount.toLocaleString()} reviews
          </Text>
        </View>
        <View style={[styles.rowContainer, styles.priceContainer]}>
          <Text style={styles.discountPrice}>
            ₹{product.discountPrice.toLocaleString()}
          </Text>
          <Text style={styles.originalPrice}>
            <Text style={styles.strikethrough}>₹{product.oldPrice}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 12,
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ratingContainer: {
    marginTop: 5,
  },
  ratingText: {
    fontSize: 14,
    color: "#FFA500", // gold color for rating stars
  },
  ratingCount: {
    fontSize: 12,
    color: "#888",
  },
  priceContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  discountPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#28a745",
  },
  originalPrice: {
    fontSize: 14,
    color: "#888",
    marginLeft: 8,
  },
  strikethrough: {
    textDecorationLine: "line-through",
  },
});

export default ProductItem;

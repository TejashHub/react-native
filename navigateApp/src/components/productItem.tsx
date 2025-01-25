import { PropsWithChildren } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

type productProps = PropsWithChildren<{
  product: Product;
}>;

const productItem = ({ product }: productProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.imageUri }} style={styles.image} />
      <View>
        <Text style={styles.name}>{product.name}</Text>
        <View style={[styles.rowContainer, styles.ratingContainer]}>
          <View style={styles.rating}>
            <Text style={styles.ratingText}>₹{product.rating}⭐</Text>
          </View>
          <View style={styles.ratingCount}>
            <Text>₹{product.ratingCount.toLocaleString()}</Text>
          </View>
        </View>
        <View style={[styles.rowContainer, styles.priceContainer]}>
          <Text style={styles.discountPrice}>
            %{product.discountPrice.toLocaleString()}
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
  rating: {},
  ratingText: {},
  ratingCount: {},
  priceContainer: {
    marginTop: 10,
  },
  originalPrice: {},
  discountPrice: {},
});

export default productItem;

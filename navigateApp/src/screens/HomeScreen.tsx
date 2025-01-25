import React from "react";
import { View, StyleSheet, FlatList, Pressable } from "react-native";
import ProductItem from "../components/productItem"; // Updated to match component name
import Separator from "../components/separator";
import PRODUCT_LIST from "../data/constant";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCT_LIST}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={Separator}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              navigation.navigate("Product", { product: item });
            }}
          >
            <ProductItem product={item} />
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#FFFFFF",
  },
});

export default HomeScreen;

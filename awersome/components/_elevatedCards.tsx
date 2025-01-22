import { Text, View, StyleSheet, ScrollView } from "react-native";
import React from "react";

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.heading}>Elevated Cards</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardText}>Elevated Card</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardText}>Elevated Card</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardText}>Elevated Card</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardText}>Elevated Card</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardText}>Elevated Card</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardText}>Elevated Card</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardText}>Elevated Card</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardText}>Elevated Card</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
    padding: 10,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#b0a8b9",
  },
  card: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: 100,
    borderRadius: 5,
    margin: 5,
  },
  cardElevated: {
    borderRadius: 5,
    backgroundColor: "#845ec2",
    elevation: 5,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#c34a36",
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  cardText: {
    color: "white",
    fontWeight: "bold",
  },
});

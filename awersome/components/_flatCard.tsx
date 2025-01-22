import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.heading}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.card1]}>
          <Text style={styles.cardText}>0001</Text>
        </View>
        <View style={[styles.card, styles.card2]}>
          <Text style={styles.cardText}>0002</Text>
        </View>
        <View style={[styles.card, styles.card3]}>
          <Text style={styles.cardText}>0003</Text>
        </View>
        <View style={[styles.card, styles.card1]}>
          <Text style={styles.cardText}>0004</Text>
        </View>
      </View>
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
    justifyContent: "center",
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
  card1: {
    backgroundColor: "#845ec2",
  },
  card2: {
    backgroundColor: "#4b4453",
  },
  card3: {
    backgroundColor: "#c34a36",
  },
  cardText: {
    color: "white",
    fontWeight: "bold",
  },
});

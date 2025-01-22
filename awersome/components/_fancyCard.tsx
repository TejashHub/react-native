import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.heading}>Trending Places</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Image
            source={{
              uri: "https://static.toiimg.com/img/67152266/Master.jpg",
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Hawa Mahal</Text>
            <Text style={styles.cardLabel}>Pink City Jaipur</Text>
            <Text style={styles.cardDescription}>
              Hawa Mahal: Iconic pink sandstone palace with intricate lattice
              windows.
            </Text>
            <Text style={styles.cardFooter}>12 minit aways</Text>
          </View>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Image
            source={{
              uri: "https://static.toiimg.com/img/67152266/Master.jpg",
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Hawa Mahal</Text>
            <Text style={styles.cardLabel}>Pink City Jaipur</Text>
            <Text style={styles.cardDescription}>
              Hawa Mahal: Iconic pink sandstone palace with intricate lattice
              windows.
            </Text>
            <Text style={styles.cardFooter}>12 minit aways</Text>
          </View>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Image
            source={{
              uri: "https://static.toiimg.com/img/67152266/Master.jpg",
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Hawa Mahal</Text>
            <Text style={styles.cardLabel}>Pink City Jaipur</Text>
            <Text style={styles.cardDescription}>
              Hawa Mahal: Iconic pink sandstone palace with intricate lattice
              windows.
            </Text>
            <Text style={styles.cardFooter}>12 minit aways</Text>
          </View>
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
    width: 280,
    margin: 10,
    borderRadius: 5,
    overflow: "hidden",
  },
  cardElevated: {
    backgroundColor: "white",
    color: "black",
    elevation: 0.4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#c34a36",
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  cardImage: {
    width: "100%",
    height: 150,
  },
  cardBody: {
    backgroundColor: "white",
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 30,
  },
  cardLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: "gray",
    lineHeight: 20,
  },
  cardDescription: {
    fontSize: 15,
    lineHeight: 15,
    fontWeight: "medium",
  },
  cardFooter: {
    fontSize: 15,
    fontWeight: "bold",
    lineHeight: 30,
  },
});

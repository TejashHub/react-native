import {
  View,
  Text,
  StyleSheet,
  Linking,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function AcctionCard() {
  const openWebsite = (link: string) => {
    Linking.openURL(link);
  };
  return (
    <View>
      <Text style={styles.heading}>Blog Card</Text>
      <ScrollView horizontal style={styles.cantainer}>
        <TouchableOpacity
          style={[styles.card, styles.cardElevated]}
          onPress={() =>
            openWebsite("https://reactnative.dev/docs/touchableopacity")
          }
        >
          <View style={styles.headingContainer}>
            <Text style={styles.headingText}>
              what's new in javascript in 2025
            </Text>
          </View>
          <View>
            <Image
              source={{
                uri: "https://wpengine.com/wp-content/uploads/2021/07/jsheader-1024x535.png",
              }}
              style={{ width: 280, height: 150 }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.card, styles.cardElevated]}
          onPress={() =>
            openWebsite("https://reactnative.dev/docs/touchableopacity")
          }
        >
          <View style={styles.headingContainer}>
            <Text style={styles.headingText}>
              what's new in typeScript in 2025
            </Text>
          </View>
          <View>
            <Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrJD3ZBX3ED6gcI-fF3qqzM3SPujbtVvQ_MA&s",
              }}
              style={{ width: 280, height: 150 }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.card, styles.cardElevated]}
          onPress={() =>
            openWebsite("https://reactnative.dev/docs/touchableopacity")
          }
        >
          <View style={styles.headingContainer}>
            <Text style={styles.headingText}>what's new in html in 2025</Text>
          </View>
          <View>
            <Image
              source={{
                uri: "https://www.ionos.com/digitalguide/fileadmin/DigitalGuide/Teaser/html-tagst.jpg",
              }}
              style={{ width: 280, height: 150 }}
            />
          </View>
        </TouchableOpacity>
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
  cantainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#b0a8b9",
  },
  card: {
    width: 280,
    margin: 10,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  cardElevated: {},
  headingContainer: {},
  headingText: {
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 30,
    textAlign: "center",
  },
});

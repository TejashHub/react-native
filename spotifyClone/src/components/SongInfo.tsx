import React from "react";
import { View, Text, StyleSheet } from "react-native";
import type { PropsWithChildren } from "react";
import { Track } from "react-native-track-player";

type SongInfoProps = PropsWithChildren<{
  track: Track | null | undefined;
}>;

export const SongInfo = (props: SongInfoProps): JSX.Element => {
  const { track } = props;
  console.log(track);
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {track?.title || "Unknown Title"}
        </Text>
        <Text style={styles.subtitle} numberOfLines={1}>
          {track?.artist || "Unknown Artist"} ·{" "}
          {track?.album || "Unknown Album"}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#1e1e1e",
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4, // Elevation for Android shadow
  },
  textContainer: {
    alignItems: "flex-start",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff", // White text for contrast
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#aaa", // Light gray for secondary information
  },
});

export default SongInfo;

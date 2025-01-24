import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import TrackPlayer, {
  usePlaybackState,
  State,
} from "react-native-track-player";
import Icon from "react-native-vector-icons/MaterialIcons";

const ControlCenter = () => {
  const playbackState = usePlaybackState();

  // Next button
  const skipToNext = async () => {
    try {
      await TrackPlayer.skipToNext();
    } catch (e) {
      console.log("No next track available", e);
    }
  };

  // Previous button
  const skipToPrevious = async () => {
    try {
      await TrackPlayer.skipToPrevious();
    } catch (e) {
      console.log("No previous track available", e);
    }
  };

  // Play/Pause toggle
  const togglePlayBack = async (playback: State) => {
    const currentTrack = await TrackPlayer.getActiveTrackIndex();
    if (currentTrack !== null) {
      if (playback === State.Paused || playback === State.Ready) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* Previous Button */}
      <Pressable
        onPress={skipToPrevious}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        <Icon style={styles.icon} name="skip-previous" size={40} />
      </Pressable>

      {/* Play/Pause Button */}
      <Pressable
        onPress={() => togglePlayBack(playbackState)}
        style={({ pressed }) => [
          styles.playButton,
          pressed && styles.buttonPressed,
        ]}
      >
        <Icon
          style={styles.icon}
          name={playbackState === State.Playing ? "pause" : "play-arrow"}
          size={50}
        />
      </Pressable>

      {/* Next Button */}
      <Pressable
        onPress={skipToNext}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        <Icon style={styles.icon} name="skip-next" size={40} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#1e1e1e",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#333",
  },
  playButton: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 50,
    backgroundColor: "#555",
  },
  buttonPressed: {
    backgroundColor: "#444",
    transform: [{ scale: 0.95 }],
  },
  icon: {
    color: "#fff",
  },
});

export default ControlCenter;

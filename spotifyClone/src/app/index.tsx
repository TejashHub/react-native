import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import MusicPlayer from "../screen/MusicPlayer";
import {
  setupTrack,
  addTrack,
  PlaybackService,
} from "../../services/musicPlayerService";
import { SafeAreaView } from "react-native-safe-area-context";
import TrackPlayer from "react-native-track-player";
import { View, StyleSheet } from "react-native";

const App = (): JSX.Element => {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  const setup = async () => {
    let isSetup = await setupTrack();
    if (isSetup) {
      await addTrack();
    } else {
      console.log("TrackPlayer service is not running");
    }
    setIsPlayerReady(isSetup);
  };

  useEffect(() => {
    setup();
  }, []);

  if (!isPlayerReady) {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      </SafeAreaView>
    );
  }
  return <MusicPlayer />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
    justifyContent: "center",
    alignItems: "center",
  },
});

TrackPlayer.registerPlaybackService(() => PlaybackService);

export default App;

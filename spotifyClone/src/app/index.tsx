import TrackPlayer from "react-native-track-player";
import { View, Text, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import type { PropsWithChildren } from "react";
import {
  setupPlayer,
  addTrack,
  playBackService,
} from "../../musicPlayerService";
import { SafeAreaView } from "react-native-safe-area-context";

const App = (): JSX.Element => {
  const [isPlayReady, setIsPlayReady] = useState(false);

  const setUp = async () => {
    let isSetup = await setupPlayer();
    if (isSetup) {
      await addTrack();
    }
    setIsPlayReady(isSetup);
  };

  useEffect(() => {
    setUp();
  }, []);

  if (!isPlayReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return (
    <View>
      <Text>Music Player Sections</Text>
    </View>
  );
};

TrackPlayer.registerPlaybackService(() => playBackService);

export default App;

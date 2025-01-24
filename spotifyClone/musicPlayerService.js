import TrackPlayer, {
  RepeatMode,
  Capability,
  Event,
} from "react-native-track-player";
import { playListData } from "./src/constants/Constant";
export const setupPlayer = async () => {
  try {
    const isSetup = await TrackPlayer.isServiceRunning();

    if (!isSetup) {
      await TrackPlayer.setupPlayer();
      console.log("Player is set up");
    }

    await TrackPlayer.updateOptions({
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.Stop,
      ],
      compactCapabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
      ],
    });

    await TrackPlayer.setRepeatMode(RepeatMode.Queue);

    // Add tracks to the player
    await TrackPlayer.add(playListData);
    console.log("Tracks added");
  } catch (error) {
    console.error("Error setting up the player:", error);
  }
};
export const addTrack = async () => {
  await TrackPlayer.add(playListData);
  await TrackPlayer.setRepeatMode(RepeatMode.Queue);
};

export const playBackService = async () => {
  TrackPlayer.addEventListener(Event.RemotePause, () => {
    TrackPlayer.pause();
  });

  TrackPlayer.addEventListener(Event.RemotePlay, () => {
    TrackPlayer.play();
  });

  TrackPlayer.addEventListener(Event.RemoteNext, () => {
    TrackPlayer.skipToNext();
  });

  TrackPlayer.addEventListener(Event.RemotePrevious, () => {
    TrackPlayer.skipToPrevious();
  });
};

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
} from "react-native";
import TrackPlayer, {
  Event,
  Track,
  useTrackPlayerEvents,
} from "react-native-track-player";
import { playListData } from "../constants/Constant";
import { SongInfo } from "../components/SongInfo";
import SongSlider from "../components/SongSlider";
import ControlCenter from "../components/ControlCenter";

const { width } = Dimensions.get("window");

const MusicPlayer = () => {
  const [track, setTrack] = useState<Track | null>();

  useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async (event) => {
    if (event.type === Event.PlaybackActiveTrackChanged) {
      const playingTrack = await TrackPlayer.getTrack(event.nextTrack);
      setTrack(playingTrack);
      console.log(playingTrack);
    }
  });

  const renderArtWork = ({ item }: { item: Track }) => {
    return (
      <View style={styles.listArtWrapper}>
        <View style={styles.albumContainer}>
          {item?.artwork ? (
            <Image
              style={styles.albumImageArt}
              source={{ uri: item?.artwork?.toString() }}
            />
          ) : (
            <View style={styles.placeholder}>
              <Text style={styles.placeholderText}>No Artwork</Text>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={playListData}
        renderItem={renderArtWork}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
      />
      <SongInfo track={track} />
      <SongSlider />
      <ControlCenter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e", // Dark background for the music player
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  flatListContainer: {
    alignItems: "center",
  },
  listArtWrapper: {
    width: width * 0.8, // Artwork container width
    height: width * 0.8, // Artwork container height
    marginHorizontal: 10,
    borderRadius: 20,
    overflow: "hidden", // Ensures the image stays within rounded corners
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
  },
  albumContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  albumImageArt: {
    width: "100%",
    height: "100%",
    resizeMode: "cover", // Ensures the image scales properly
  },
  placeholder: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#555", // Neutral gray for placeholder
  },
  placeholderText: {
    fontSize: 18,
    color: "#fff", // White text for the placeholder
    fontWeight: "500",
  },
});

export default MusicPlayer;

import { Track } from "react-native-track-player";
import { v4 as uuidv4 } from "uuid";

export const playListData: Track[] = [
  {
    id: uuidv4(),
    title: "Tum Hi Ho",
    artist: "Arijit Singh",
    album: "Aashiqui 2",
    artwork: "../assets/images/001.webp",
    url: require("../assets/audios/001.mp3"),
  },
  {
    id: uuidv4(),
    title: "Jai Ho",
    artist: "A.R. Rahman",
    album: "Slumdog Millionaire",
    artwork: "../assets/images/002.jpg",
    url: require("../assets/audios/002.mp3"),
  },
  {
    id: uuidv4(),
    title: "Kesariya",
    artist: "Arijit Singh",
    album: "Brahmāstra",
    artwork: "../assets/images/003.jpg",
    url: require("../assets/audios/003.mp3"),
  },
  {
    id: uuidv4(),
    title: "Tera Ban Jaunga",
    artist: "Akhil Sachdeva",
    album: "Kabir Singh",
    artwork: "../assets/images/004.jpg",
    url: require("../assets/audios/004.mp3"),
  },
  {
    id: uuidv4(),
    title: "Lungi Dance",
    artist: "Yo Yo Honey Singh",
    album: "Chennai Express",
    artwork: "../assets/images/005.jpg",
    url: require("../assets/audios/005.mp3"),
  },
  {
    id: uuidv4(),
    title: "Zara Sa",
    artist: "KK",
    album: "Jannat",
    artwork: "../assets/images/006.jpg",
    url: require("../assets/audios/006.mp3"),
  },
];

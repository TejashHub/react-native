import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icons from "../components/Icons";
import ToastManager, { Toast } from "toastify-react-native";

const App = () => {
  const [isCross, setIsCross] = useState<boolean>(false);
  const [gameWinner, setGameWinner] = useState<string>("");
  const [gameState, setGameState] = useState(new Array(9).fill("empty", 0, 9));
  const reloadGame = () => {
    setIsCross(false);
    setGameWinner("");
    setGameState(new Array(9).fill("empty", 0, 9));
  };
  const checkIsWinner = () => {
    const winningCombinations = [
      [0, 1, 2],
      [0, 4, 8],
      [0, 3, 6],
      [1, 4, 7],
      [1, 0, 2],
      [2, 4, 6],
      [2, 1, 0],
      [2, 5, 8],
      [3, 4, 5],
      [3, 0, 6],
      [4, 0, 8],
      [4, 2, 6],
      [4, 3, 5],
      [4, 1, 7],
      [5, 2, 8],
      [5, 3, 4],
      [6, 0, 3],
      [6, 7, 8],
      [6, 4, 2],
      [7, 1, 4],
      [7, 6, 8],
      [8, 5, 2],
      [8, 4, 0],
      [8, 6, 7],
    ];
    for (const [a, b, c] of winningCombinations) {
      if (
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c] &&
        gameState[a] !== "empty"
      ) {
        setGameWinner(`${gameState[a]} won the game!`);
        return;
      }
    }
  };

  const changeItem = (itemNumber: number) => {
    if (gameWinner) {
      return Toast.success(gameWinner);
    }
    if (gameState[itemNumber] === "empty") {
      gameState[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return Toast.success("Position is Already fill");
    }
  };

  return (
    <View style={styles.container}>
      <ToastManager />
      <Icons />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#515151",
  },
});

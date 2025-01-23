import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import Icons from "../components/Icons";
import ToastManager, { Toast } from "toastify-react-native";

const App = () => {
  const [isCross, setIsCross] = useState<boolean>(true);
  const [gameWinner, setGameWinner] = useState<string>("");
  const [gameState, setGameState] = useState(new Array(9).fill("empty"));

  const reloadGame = () => {
    setIsCross(true); // Start with Cross
    setGameWinner("");
    setGameState(new Array(9).fill("empty"));
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

  const changeItem = (index: number) => {
    if (gameWinner) {
      Toast.success(gameWinner);
      return;
    }

    if (gameState[index] === "empty") {
      const newGameState = [...gameState];
      newGameState[index] = isCross ? "cross" : "circle";
      setGameState(newGameState);
      setIsCross(!isCross);
      checkIsWinner();
    } else {
      Toast.error("Position is already filled!");
    }
  };

  return (
    <View style={styles.container}>
      <ToastManager />
      {gameWinner ? (
        <View style={[styles.playerInfo, styles.winnerInfo]}>
          <Text style={styles.winnerText}>{gameWinner}</Text>
          <Pressable style={styles.reloadButton} onPress={reloadGame}>
            <Text style={styles.reloadText}>Play Again</Text>
          </Pressable>
        </View>
      ) : (
        <View
          style={[styles.playerInfo, isCross ? styles.playerX : styles.playerO]}
        >
          <Text style={styles.gameTurnText}>
            Player {isCross ? "X" : "O"}'s Turn
          </Text>
        </View>
      )}

      {/* Game Grid */}
      <FlatList
        numColumns={3}
        data={gameState}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Pressable style={styles.card} onPress={() => changeItem(index)}>
            <Icons name={item} />
          </Pressable>
        )}
        contentContainerStyle={styles.grid}
      />

      <Pressable onPress={reloadGame} style={styles.gamebtn}>
        <Text style={styles.gameBtnText}>
          {gameWinner ? "start new game" : "reload the game"}
        </Text>
      </Pressable>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#515151",
    justifyContent: "center",
  },
  playerInfo: {
    padding: 20,
    margin: 20,
    borderRadius: 5,
  },
  winnerInfo: {
    backgroundColor: "#4CAF50",
  },
  playerX: {
    backgroundColor: "#ebb73d",
  },
  playerO: {
    backgroundColor: "#63f054",
  },
  winnerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  reloadButton: {
    backgroundColor: "#ffffff",
    marginTop: 15,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  reloadText: {
    color: "#4CAF50",
    fontWeight: "bold",
  },
  gameTurnText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  grid: {
    margin: 10,
  },
  card: {
    flex: 1,
    margin: 5,
    height: 100,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  gamebtn: {
    backgroundColor: "#cf4829",
    marginTop: 15,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  gameBtnText: {
    fontSize: 30,
    textTransform: "capitalize",
    color: "#decfcc",
    fontWeight: "bold",
    padding: 20,
  },
});

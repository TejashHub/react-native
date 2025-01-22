import {
  View,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { PropsWithChildren, useState } from "react";
import DiceOne from "../images/01.jpeg";
import DiceTwo from "../images/02.jpeg";
import DiceThree from "../images/03.jpeg";
import DiceFour from "../images/04.jpeg";
import DiceFive from "../images/05.png";
import DiceSix from "../images/06.jpeg";
import DiceSeven from "../images/07.jpg";

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const Dice = ({ imageUrl }: DiceProps) => {
  return (
    <View style={styles.diceImage}>
      <Image source={imageUrl} style={{ width: 100, height: 100 }} />
    </View>
  );
};

const HomeScreen = (): JSX.Element => {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);
  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 0:
        setDiceImage(DiceOne);
        break;
      case 1:
        setDiceImage(DiceTwo);
        break;
      case 2:
        setDiceImage(DiceThree);
        break;
      case 3:
        setDiceImage(DiceFour);
        break;
      case 4:
        setDiceImage(DiceFive);
        break;
      case 5:
        setDiceImage(DiceSix);
        break;
      default:
        setDiceImage(DiceSeven);
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <TouchableOpacity style={styles.button} onPress={() => rollDiceOnTap()}>
        <Text style={styles.buttonText}>Roll Dice</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "black",
    alignItems: "center",
  },
  diceImage: {
    height: 100,
    width: 100,
    overflow: "hidden",
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  button: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 20,
  },
  buttonText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 20,
  },
});

export default HomeScreen;

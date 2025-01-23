import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  FlatList,
  Pressable,
} from "react-native";
import Button from "@/components/Button";
import { SafeAreaView } from "react-native";
import currencyByRupees from "@/constants/Constant";
import Toast from "react-native-toast-message";

const HomeScreen = (): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>("");
  const [resultValue, setResutValue] = useState<string>("");
  const [targetCurrency, setTargetCurrency] = useState<string>("");

  const buttonPressed = (targetValue: Currency) => {
    if (!inputValue) {
      return Toast.show({
        type: "error",
        text1: "Please enter a valid amount",
      });
    }
    const inputAmount = parseFloat(inputValue);
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value;
      const result = `${targetValue.symbol} : ${convertedValue.toFixed(2)}`;
      setResutValue(result);
      setTargetCurrency(targetValue.name);
    } else {
      return Toast.show({
        type: "error",
        text1: "Invalid input. Please enter a number",
      });
    }

    console.log("Button is Press");
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar />
        <View style={styles.input}>
          <TextInput
            placeholder="Enter amount in Rupees"
            style={styles.textInput}
            value={inputValue}
            onChangeText={setInputValue}
            keyboardType="numeric"
            maxLength={12}
            clearButtonMode="always"
          />
        </View>
        <Text style={styles.resultText}>{resultValue || 0}</Text>
        <View style={styles.currencyContainer}>
          <FlatList
            numColumns={3}
            data={currencyByRupees}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <Button
                name={item.name}
                flag={item.flag}
                press={() => buttonPressed(item)}
              />
            )}
          ></FlatList>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#515151",
    padding: 10,
  },
  input: {
    width: "100%",
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  textInput: {
    height: 40,
    fontSize: 16,
    color: "#000",
  },
  resultText: {
    fontSize: 40,
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  currencyContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },
});

export default HomeScreen;

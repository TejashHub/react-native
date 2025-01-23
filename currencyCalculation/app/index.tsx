import { View, Text, StyleSheet, SafeAreaView, TextInput } from "react-native";
import React, { useState } from "react";
import Button from "@/components/Button";
import currencyByRupees from "../constants/Constant";

const App = () => {
  const [currency, setCurrency] = useState<string>("");
  const [result, setResult] = useState<number>(0);

  const getCurrency = (currencyItem: string, currencyValue: number) => {
    const parsedCurrency = parseFloat(currencyItem); // Use `parseFloat` for decimal handling
    if (isNaN(parsedCurrency)) {
      console.log("Invalid input. Please enter a valid number.");
      return;
    }

    const calculatedResult = parsedCurrency * currencyValue;
    setResult(calculatedResult);

    console.log("Calculated Result:", calculatedResult);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.input}>
        <TextInput
          placeholder="Enter Currency"
          style={styles.textInput}
          value={currency}
          onChangeText={setCurrency}
          keyboardType="numeric"
        />
      </View>
      <Text style={styles.resultText}>Your Current Value is: {result}</Text>
      <View style={styles.currencyContainer}>
        {currencyByRupees.map((item, index) => (
          <View key={index}>
            <Button
              label={item.flag}
              press={() => getCurrency(currency, item.value)}
            />
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    padding: 10,
  },
  input: {
    width: "80%",
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
    fontSize: 20,
    color: "#fff",
    marginBottom: 20,
  },
  currencyContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },
});

export default App;

import { Text, StyleSheet, View, useColorScheme, Button } from "react-native";

export default function AppLayout(): JSX.Element {
  let isDarkMode = useColorScheme() === "dark";
  return (
    <View style={isDarkMode ? styles.containerWhite : styles.containerDark}>
      <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
        App New Page
      </Text>
      <Button title={isDarkMode ? "dark mode" : "light mode"}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  containerWhite: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  containerDark: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  whiteText: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
  },
  darkText: {
    color: "black",
    fontSize: 24,
    textAlign: "center",
  },
});

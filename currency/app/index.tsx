import { View, Text, StyleSheet } from "react-native";
import Button from "@/components/Button";

const HomeScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button name="india" flag="Good MOening" />
    </View>
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
});

export default HomeScreen;

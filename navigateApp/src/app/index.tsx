import { View, Text, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import ProductScreen from "../screens/ProductScreen";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Welcome" }}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{ title: "User" }}
      />
      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={{ title: "Trending Products" }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});

export default App;

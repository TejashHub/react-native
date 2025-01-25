import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screen/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";

export type AppStackParamsList = {
  Home: undefined; // Define the route and its params (if any)
};

const Stack = createNativeStackNavigator<AppStackParamsList>();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: "center", // Center the header title
        headerBackVisible: false, // Hide the back button (if needed)
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home" }} // Optional: Customize title
      />
    </Stack.Navigator>
  );
};

export { AppStack };

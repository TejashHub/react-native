import React from "react";
import HomeScreen from "../screen/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type AppStackParamsList = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamsList>();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: "center",
        headerBackVisible: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
    </Stack.Navigator>
  );
};

export { AppStack };

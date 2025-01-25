import { View, Text } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Loading from "../components/Loading";
import { NavigationContainer } from "@react-navigation/native";
import { AppwriteContext } from "../appwrite/appwritecontext";
import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";

const Router = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { appwrite, isLoggedIn, setIsLoggedIn } = useContext(AppwriteContext);

  useEffect(() => {
    appwrite
      .getCurrentUser()
      .then((res) => {
        setIsLoading(false);
        if (res) {
          setIsLoggedIn(true);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        setIsLoggedIn(false);
        console.log(error);
      });
  }, [appwrite, setIsLoggedIn]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export { Router };

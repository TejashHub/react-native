import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppwriteContext } from "../appwrite/appwritecontext";
import Toast from "react-native-toast-message";
import Loading from "../components/Loading";

//Routes
import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";

export const Router = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { appwrite, isLoggedIn, setIsLoggedIn } = useContext(AppwriteContext);

  useEffect(() => {
    appwrite
      .getCurrentUser()
      .then((response) => {
        setIsLoading(false);
        if (response) {
          setIsLoggedIn(true);
        }
      })
      .catch((_) => {
        setIsLoading(false);
        setIsLoggedIn(false);
      });
  }, [appwrite, setIsLoggedIn]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {isLoggedIn ? <AppStack /> : <AuthStack />}
      <Toast />
    </>
  );
};

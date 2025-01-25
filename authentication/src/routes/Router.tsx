import React, { useContext, useEffect, useState } from "react";
import { AppwriteContext } from "../appwrite/AppWriteContext";
import Toast from "react-native-toast-message";
import Loading from "../components/Loading";

//Routes
import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";

export const RouterApp = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { appwrite, isLoggedIn, setIsLoggedIn } = useContext(AppwriteContext);
  console.log(AppwriteContext);
  console.log(setIsLoggedIn);
  useEffect(() => {
    appwrite
      .getCurrentUser()
      .then((res) => {
        setIsLoading(false);
        if (res) {
          console.log(res);
          setIsLoggedIn(true);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        setIsLoggedIn(false);
        Toast.show({
          type: "error",
          text1: String(error),
        });
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

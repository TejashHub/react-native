import { View, Text } from "react-native";
import React, { createContext, PropsWithChildren, FC, useState } from "react";
import Appwrite from "./service";

type AppContextType = {
  appwrite: Appwrite;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};

export const AppwriteContext = createContext<AppContextType>({
  appwrite: new Appwrite(),
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

const AppWriteProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const defaultValue = {
    appwrite: new Appwrite(),
    isLoggedIn,
    setIsLoggedIn,
  };
  return (
    <AppwriteContext.Provider value={defaultValue}>
      {children}
    </AppwriteContext.Provider>
  );
};

export default AppWriteProvider;

import React from "react";
import { RouterApp } from "../routes/Router";
import { AppwriteProvider } from "../appwrite/AppWriteContext";
const App = () => {
  return (
    <AppwriteProvider>
      <RouterApp />
    </AppwriteProvider>
  );
};

export default App;

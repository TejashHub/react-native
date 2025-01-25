import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { FAB } from "@rneui/themed";
import Toast from "react-native-toast-message";
import { AppwriteContext } from "../appwrite/AppWriteContext";

type UserObj = {
  name: string;
  email: string;
};

const HomeScreen = () => {
  const [userData, setUserData] = useState<UserObj>({ name: "", email: "" });
  const { appwrite, setIsLoggedIn } = useContext(AppwriteContext);

  const handleLogout = () => {
    appwrite
      .logout()
      .then(() => {
        setIsLoggedIn(false);
        Toast.show({
          type: "success",
          text1: "User Logout Successfully",
        });
      })
      .catch((error) => {
        Toast.show({
          type: "error",
          text1: String(error),
        });
      });
  };

  useEffect(() => {
    appwrite
      .getCurrentUser()
      .then((res) => {
        if (res) {
          const user: UserObj = {
            name: res.name,
            email: res.email,
          };
          setUserData(user);
        }
      })
      .catch((error) => {
        Toast.show({
          type: "error",
          text1: String(error),
        });
      });
  }, [appwrite]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {userData.name}</Text>
      <Text style={styles.subtitle}>Email: {userData.email}</Text>
      <FAB
        title="Add"
        placement="right"
        onPress={handleLogout}
        color="#6200ea"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 16,
  },
  logoutButton: {
    backgroundColor: "#e53935",
    padding: 10,
    borderRadius: 5,
  },
  logoutText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default HomeScreen;

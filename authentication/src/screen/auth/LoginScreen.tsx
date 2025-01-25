import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import Toast from "react-native-toast-message";
import { AuthStackParamsList } from "@/src/routes/AuthStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppwriteContext } from "@/src/appwrite/appwritecontext";

type LoginScreenProps = NativeStackScreenProps<AuthStackParamsList, "Login">;

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const { appwrite, setIsLoggedIn } = useContext(AppwriteContext);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleValidation = (): boolean => {
    if (!email || !password) {
      Toast.show({
        type: "error",
        text1: "Please enter both email and password.",
      });
      return false;
    }
    return true;
  };

  const handleLogin = () => {
    if (!handleValidation()) return;
    const user = { email, password };
    appwrite
      .loginAccount(user)
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
          Toast.show({
            type: "success",
            text1: "Account Login successfully!",
          });
        }
      })
      .catch((error) => {
        Toast.show({
          type: "error",
          text1: "Login failed",
          text2: String(error.message || error),
        });
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Don't have an account?{" "}
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.linkText}>Register</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#6200ee",
    marginBottom: 40,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingLeft: 10,
    fontSize: 16,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#6200ee",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  footer: {
    marginTop: 20,
    alignItems: "center",
  },
  footerText: {
    fontSize: 16,
    color: "#333",
  },
  linkText: {
    color: "#6200ee",
    fontWeight: "bold",
  },
});

export default LoginScreen;

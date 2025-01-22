import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import * as Yup from "yup";
import { Formik } from "formik";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { SafeAreaView } from "react-native-safe-area-context";

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .typeError("Password length must be a number")
    .min(4, "Password length must be at least 4 characters")
    .max(16, "Password length must not exceed 16 characters")
    .required("Password length is required"),
});

export default function HomeScreen() {
  const [password, setPassword] = useState("");
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let characterList = "";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const digitalChars = "0123456789";
    const specialChars = "!@#$%^&*()_+";

    if (upperCase) {
      characterList += upperCaseChars;
    }

    if (lowerCase) {
      characterList += lowerCaseChars;
    }

    if (number) {
      characterList += digitalChars;
    }

    if (symbols) {
      characterList += specialChars;
    }

    const passwordResult = createPassword(characterList, passwordLength);

    setPassword(passwordResult);
    setIsPasswordGenerated(true);
  };

  const createPassword = (characters: string, passwordLength: number) => {
    let result = "";
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };

  const resetPassword = () => {
    setPassword("");
    setIsPasswordGenerated(false);
    setUpperCase(false);
    setLowerCase(false);
    setNumber(false);
    setSymbols(false);
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.heading}>Password Generator</Text>
          <Formik
            initialValues={{ passwordLength: "" }}
            validationSchema={PasswordSchema}
            onSubmit={(values) => {
              console.log(values);
              generatePasswordString(+values.passwordLength);
            }}
          >
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset,
            }) => (
              <>
                <View style={styles.input}>
                  <Text style={styles.inputText}>Password Length</Text>
                  <View style={styles.inputColumn}>
                    <TextInput
                      style={styles.inputStyle}
                      value={values.passwordLength}
                      onChangeText={handleChange("passwordLength")}
                      placeholder="Ex. 8"
                      keyboardType="numeric"
                    ></TextInput>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}>
                        {errors.passwordLength}
                      </Text>
                    )}
                  </View>
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.inputText}>Include Uppercase</Text>
                  <View>
                    <BouncyCheckbox
                      disableBuiltInState
                      isChecked={upperCase}
                      onPress={() => setUpperCase(!upperCase)}
                      fillColor="#29AB87"
                    />
                  </View>
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.inputText}>Include Lowercase</Text>
                  <View>
                    <BouncyCheckbox
                      disableBuiltInState
                      isChecked={lowerCase}
                      onPress={() => setLowerCase(!lowerCase)}
                      fillColor="#29AB87"
                    />
                  </View>
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.inputText}>Include Lowercase</Text>
                  <View>
                    <BouncyCheckbox
                      disableBuiltInState
                      isChecked={number}
                      onPress={() => setNumber(!number)}
                      fillColor="#29AB87"
                    />
                  </View>
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.inputText}>Include Lowercase</Text>
                  <View>
                    <BouncyCheckbox
                      disableBuiltInState
                      isChecked={symbols}
                      onPress={() => setSymbols(!symbols)}
                      fillColor="#29AB87"
                    />
                  </View>
                </View>
                <View style={styles.formActions}>
                  <TouchableOpacity
                    disabled={!isValid}
                    style={styles.button}
                    onPress={() => handleSubmit()}
                  >
                    <Text style={styles.buttonText}>Generate Password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    disabled={!isValid}
                    style={styles.button}
                    onPress={() => {
                      handleReset();
                      resetPassword();
                    }}
                  >
                    <Text style={styles.buttonText}>Reset Password</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
        <View style={styles.passwordContainer}>
          {isPasswordGenerated ? (
            <Text selectable={true} style={styles.generatedPassword}>
              {password}
            </Text>
          ) : (
            <Text style={styles.generatedPassword}>
              No password generated yet.
            </Text>
          )}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#5E32AA",
  },
  formContainer: {
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    marginBottom: 30,
  },
  input: {
    flex: 1,
    marginBottom: 20,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  inputText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
  inputColumn: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: "100%",
  },
  inputStyle: {
    fontSize: 16,
    color: "#333",
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "white",
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    color: "#333",
  },
  errorText: {
    color: "red",
    marginTop: 5,
    fontSize: 14,
  },
  checkboxWrapper: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#3C1C70",
    borderRadius: 8,
  },
  formActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#220750",
    paddingVertical: 15,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  passwordContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#5E32AA",
    borderRadius: 8,
    alignItems: "center",
  },
  generatedPassword: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#5E32AA",
    padding: 40,
    backgroundColor: "#ffffff",
    width: "100%",
    textAlign: "center",
    borderRadius: 8,
  },
});

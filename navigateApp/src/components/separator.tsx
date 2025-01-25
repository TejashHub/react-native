import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Separator = () => {
  return (
    <View style={styles.separator}>
      <Text>Seprator Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 0.8,
    backgroundColor: "#CAD5E2",
  },
});

export default Separator;

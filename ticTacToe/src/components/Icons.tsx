import React from "react";
import type { PropsWithChildren } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Snackbar from "react-native-snackbar";

type IconProps = PropsWithChildren<{
  name: string;
}>;

const Icons = (props: IconProps): JSX.Element => {
  const { name } = props;
  switch (name) {
    case "circle":
      return <Icon name="circle-thin" size={40} color="#F7CD2E" />;
      break;
    case "cross":
      return <Icon name="times" size={40} color="#F7CD2E" />;
      break;

    default:
      return <Icon name="times" size={40} color="#F7CD2E" />;
  }
  return (
    <View>
      <Icon.Button name="facebook" backgroundColor="#3b5998">
        Login with Facebook
      </Icon.Button>
    </View>
  );
};

export default Icons;

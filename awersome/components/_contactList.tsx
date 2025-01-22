import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function ContactList() {
  const users = [
    {
      userId: "b1a8d9f4-8c9f-11ed-a1eb-0242ac120002",
      name: "Payal Yadav",
      status: "Active",
      passportSizeImage:
        "https://img.freepik.com/premium-photo/passport-photo-portrait-asian-smiling-woman_264197-7651.jpg",
    },
    {
      userId: "b1a8db00-8c9f-11ed-a1eb-0242ac120002",
      name: "Tejash Patel",
      status: "Inactive",
      passportSizeImage:
        "data:image/jpeg;base64,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",
    },
    {
      userId: "b1a8dc0a-8c9f-11ed-a1eb-0242ac120002",
      name: "Riya Sharma",
      status: "Active",
      passportSizeImage:
        "https://i.pinimg.com/736x/8c/6a/78/8c6a785483ee3e92d8163f2fac2cc567.jpg",
    },
    {
      userId: "b1a8dcfe-8c9f-11ed-a1eb-0242ac120002",
      name: "Aarav Singh",
      status: "Active",
      passportSizeImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW3I7eEFE9ua1JBmQsiQxx5Gm5wOAeFiOJDg&s",
    },
    {
      userId: "b1a8ddfc-8c9f-11ed-a1eb-0242ac120002",
      name: "Ananya Verma",
      status: "Inactive",
      passportSizeImage:
        "https://img.freepik.com/premium-photo/passport-photo-portrait-young-man-white-background_1028938-330516.jpg",
    },
    {
      userId: "b1a8de8c-8c9f-11ed-a1eb-0242ac120002",
      name: "Rahul Gupta",
      status: "Active",
      passportSizeImage:
        "https://photoaid.com/images/cms/baby_smiling_gently_for_a_passport_picture_7c31258696.webp?quality=80&format=webp&width=1920",
    },
  ];

  return (
    <View>
      <Text style={styles.heading}>User Profile</Text>
      <ScrollView style={[styles.container]} scrollEnabled={false}>
        {users.map((user) => {
          return (
            <TouchableOpacity key={user.userId} style={styles.userCard}>
              <Text style={styles.cardTitle}>{user.name}</Text>
              <Text style={styles.cardStatus}>{user.status}</Text>
              <Image
                source={{
                  uri: `${user.passportSizeImage}`,
                }}
                style={styles.cardImage}
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
    padding: 10,
  },
  container: {},
  userCard: {
    backgroundColor: "#c1c1c1",
    margin: 10,
    padding: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 30,
  },
  cardStatus: {
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 30,
  },
  cardImage: {
    height: 80,
    width: 80,
    borderRadius: 100,
  },
});

import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Robo from "@/assets/images/robo.png";

const InitialCard = () => {
  return (
    <View style={styles.initialContainer}>
      <Image source={Robo} style={styles.robo} />
      <Text style={styles.initialText}>Start Asking Questions!</Text>
    </View>
  );
};

export default InitialCard;

const styles = StyleSheet.create({
  initialContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  robo: {
    marginTop: -20,
    height: 170,
    width: 150,
    objectFit: "contain",
    opacity: 0.5,
  },
  initialText: {
    color: "#52525b",
    fontWeight: "bold",
    marginTop: 10,
    fontSize: 16,
  },
});

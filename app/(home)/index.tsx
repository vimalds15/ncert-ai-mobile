import {
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import Logo from "@/assets/images/ncert.png";
import Chat from "@/components/Chat";
import InitialCard from "@/components/InitialCard";
import { useMessageContext } from "@/services/MessageContext";
import InputCard from "@/components/InputCard";

const Home = () => {
  const { messages } = useMessageContext();

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      header: () => (
        <View style={styles.headerContainer}>
          <Image source={Logo} style={styles.logo} />
          <Text style={styles.headerText}>NCERT AI</Text>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {!(messages.length > 0) ? (
        <InitialCard />
      ) : (
        <View style={styles.chatContainer}>
          <Chat />
        </View>
      )}
      <InputCard />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 2,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: "#52525b",
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 15,
  },
  logo: {
    height: 50,
    width: 50,
    objectFit: "contain",
  },
  headerText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#52525b",
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  chatContainer: {
    flex: 1,
  },
});

import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import { dummyData } from "@/mock/data.js";
import { useMessageContext } from "@/services/MessageContext";

const Chat = () => {
  const { messages } = useMessageContext();

  const getStyleForMessageContainer = (type) => {
    return type === "user" ? styles.userMessage : {};
  };

  return (
    <View>
      {messages?.map((message) => (
        <View style={getStyleForMessageContainer(message.type)}>
          <Text style={styles.messageType}>
            {message.type === "user" ? "You" : "AI"}
          </Text>
          <Text style={styles.messageContent}>{message.content}</Text>
        </View>
      ))}
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  userMessage: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  messageType: {
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  messageContent: {
    backgroundColor: "#ebebeb",
    maxWidth: "75%",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 2,
    borderRadius: 4,
  },
});

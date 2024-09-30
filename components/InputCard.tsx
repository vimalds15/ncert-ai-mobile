import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Dropdown from "./DropDown";
import LoaderSpinner from "./LoaderSpinner";
import { useMessageContext } from "@/services/MessageContext";
import { sendQuery, sendAgentQuery } from "@/api/message";

const InputCard = () => {
  const [query, setQuery] = useState("");
  const [fetching, setFetching] = useState(false);
  const [value, setValue] = useState("default");

  const { addMessage } = useMessageContext();

  const handleSendMessage = async () => {
    setFetching(true);
    setQuery("");
    const userMessage = {
      type: "user",
      content: query,
    };
    addMessage(userMessage);
    let response;
    if (value === "default") {
      response = await sendQuery(query);
    } else {
      response = await sendAgentQuery(query);
    }
    const responseMessage = {
      type: "ai",
      content: response.data.response,
    };
    addMessage(responseMessage);
    setFetching(false);
  };

  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          multiline
          placeholder="Type your Query"
          style={styles.inputText}
          value={query}
          onChangeText={(val) => setQuery(val)}
          editable={!fetching}
        />

        <TouchableOpacity
          disabled={fetching}
          style={styles.buttonContainer}
          onPress={handleSendMessage}
        >
          {fetching ? (
            <LoaderSpinner />
          ) : (
            <Text style={styles.btnText}>Send</Text>
          )}
        </TouchableOpacity>
      </View>
      <View>
        <Dropdown value={value} setValue={setValue} />
      </View>
    </>
  );
};

export default InputCard;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
  },
  inputText: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#d6d5d5",
    paddingHorizontal: 10,
    paddingTop: 7,
    height: 40,
  },
  buttonContainer: {
    backgroundColor: "black",
    color: "white",
    paddingHorizontal: 15,
    marginLeft: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "white",
    marginTop: -2,
  },
});

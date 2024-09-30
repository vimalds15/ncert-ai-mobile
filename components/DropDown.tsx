import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const Dropdown = ({ value, setValue }) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "Default RAG", value: "default" },
    { label: "AI Agent", value: "agent" },
  ]);

  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  label: {
    marginBottom: 10,
  },
  dropdown: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#d6d5d5",
    minHeight: 40,
    borderRadius: 0,
  },
  dropdownContainer: {
    backgroundColor: "#fff",
  },
});

export default Dropdown;

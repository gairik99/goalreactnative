import React from "react";
import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

const GoalInput = ({ onAddGoal, showmodal, onCancel }) => {
  const [inputText, setInputText] = useState("");
  const goalInputHandler = (enteredText) => {
    setInputText(enteredText);
  };
  const onAddGoalHandler = () => {
    if (inputText.trim().length === 0) {
      return;
    }
    onAddGoal(inputText);
    setInputText("");
  };
  return (
    <Modal animationType="fade" visible={showmodal}>
      <View style={styles.inputContainer}>
        <Image source={require("../assets/goal.png")} style={styles.image} />
        <TextInput
          placeholder="your course goal"
          style={styles.textInput}
          value={inputText}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={onAddGoalHandler} color="green" />
          </View>
          <View style={styles.button}>
            <Button title="cancel" onPress={onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "94%",
    borderRadius: 6,
    backgroundColor: "#e4d0ff",
    color: "#120438",
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 16,
    marginTop: 8,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
    borderRadius: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

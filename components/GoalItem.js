import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const GoalItem = ({ text, onDeleteItem, id }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={() => onDeleteItem(id)}
        // android_ripple={{ color: "#dddddd" }}
        style={({ pressed }) => (pressed ? styles.pressItem : null)}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
  pressItem: {
    opacity: 0.6,
    backgroundColor: "#5e0acc",
    borderRadius: 6,
  },
});

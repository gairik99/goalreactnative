import {
  Button,
  StyleSheet,
  // Text,
  // TextInput,
  View,
  FlatList,
  // ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  // const [inputText, setInputText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const [visiable, setIsVisiable] = useState(false);

  // const goalInputHandler = (enteredText) => {
  //   setInputText(enteredText);
  // };
  const addGoalHandler = (inputText) => {
    if (inputText.trim().length === 0) {
      return;
    }
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: inputText, id: Math.random().toString() },
    ]);
    // setInputText("");
    endGoalInputHandler();
  };
  const deleteGoalHandler = (id) => {
    // console.log("delete");
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };

  const endGoalInputHandler = () => {
    setIsVisiable(false);
  };
  // console.log(courseGoals);
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        {/* <Text style={styles.dummytext}>Hi! There</Text>
      <Button title="click" /> */}
        {/* <View style={styles.inputContainer}>
        <TextInput
          placeholder="your course goal"
          style={styles.textInput}
          value={inputText}
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View> */}
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={() => setIsVisiable(true)}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          showmodal={visiable}
          onCancel={endGoalInputHandler}
        />
        {/* <View style={styles.goalContainer}>
        <ScrollView>
          {courseGoals.map((goal, index) => (
            <View key={index} style={styles.goalItem}>
              <Text style={styles.goalItem}>{goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View> */}
        <View style={styles.goalContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => (
              <GoalItem
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
                id={itemData.item.id}
              />
            )}
            keyExtractor={(item, __) => item.id}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // dummytext: {
  //   margin: 12,
  //   borderWidth: 4,
  //   borderColor: "green",
  //   padding: 8,
  // },
  appContainer: {
    flex: 1,
    padding: 50,
    marginTop: 50,
  },
  // inputContainer: {
  //   flex: 1,
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   marginBottom: 24,
  // },
  // textInput: {
  //   borderWidth: 1,
  //   borderColor: "#cccccc",
  //   width: "76%",
  //   borderRadius: 6,
  //   backgroundColor: "#ffffff",
  //   marginRight: 8,
  // },
  goalContainer: {
    flex: 5,
  },
});

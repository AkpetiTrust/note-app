import { View, ScrollView } from "react-native";
import styles from "./styles";
import BackButton from "../../components/BackButton/BackButton";
import AppText from "../../components/AppText/AppText";
import Menu from "../../components/Menu/Menu";
import Search from "../../components/Search/Search";
import MonthSection from "./MonthSection/MonthSection";
import PlusButton from "../../components/PlusButton/PlusButton";
import { useState } from "react";

function Todo({ navigation }) {
  const [todos, setTodos] = useState([
    {
      month: "April, 2022",
      todos: [
        {
          title: "FINISH GSTs",
          description: "Finish all GSTs very soon, try and finish it by 26th",
          subtasks: [],
          date: "Apr, 26",
          dueDate: "9th June",
          done: false,
          id: 1,
        },
        {
          title: "FINISH PROJECTS",
          description:
            "Complete all my coding projects on or before June, 2022, so I can focus on new projects",
          subtasks: [],
          date: "Apr, 28",
          dueDate: "9th June",
          done: false,
          id: 2,
        },
      ],
    },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.inner}>
        <View style={styles.header}>
          <BackButton navigation={navigation} style={styles.back_button} />
          <AppText fontWeight={"700"} style={styles.title}>
            TODO
          </AppText>
        </View>
        <View style={styles.main}>
          <AppText>A list of your tasks.</AppText>
          <Search style={styles.search} onChange={() => null} />
          <View>
            {todos.map((month) => (
              <MonthSection month={month} key={month.months} />
            ))}
          </View>
        </View>
      </ScrollView>
      <Menu navigation={navigation} />
      <PlusButton />
    </View>
  );
}

export default Todo;

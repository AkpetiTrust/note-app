import { View, ScrollView } from "react-native";
import styles from "./styles";
import BackButton from "../../components/BackButton/BackButton";
import AppText from "../../components/AppText/AppText";
import Menu from "../../components/Menu/Menu";
import Search from "../../components/Search/Search";
import MonthSection from "./MonthSection/MonthSection";
import PlusButton from "../../components/PlusButton/PlusButton";
import { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import useGlobalState from "../../hooks/useGlobalState";
import parseTodos from "./functions/parseTodos";
import filterTodos from "../../components/Search/functions/filterTodos";

function Todo({ navigation }) {
  const [global, setGlobal, refreshGlobal] = useGlobalState();
  const [filter, setFilter] = useState("");

  const isFocused = useIsFocused();

  useEffect(() => {
    refreshGlobal();
  }, [isFocused]);

  const onChange = (value, id) => {
    let newGlobal = { ...global };
    newGlobal.todos.forEach((item, i) => {
      if (item.id === id) {
        newGlobal.todos[i].done = value;
      }
    });
    setGlobal(newGlobal);
  };

  const onSearchChange = (value) => {
    setFilter(value);
  };

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
          <Search style={styles.search} onChange={onSearchChange} />
          <View>
            {parseTodos(filterTodos(global.todos, filter)).map((month) => (
              <MonthSection
                navigation={navigation}
                month={month}
                key={month.month}
                onChange={onChange}
              />
            ))}
          </View>
        </View>
      </ScrollView>
      <Menu navigation={navigation} />
      <PlusButton
        onPress={() => {
          navigation.navigate("TodoItem", { todo: null });
        }}
      />
    </View>
  );
}

export default Todo;

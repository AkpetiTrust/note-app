import { View, TouchableOpacity, ScrollView } from "react-native";
import AppText from "../../components/AppText/AppText";
import AppInput from "../../components/AppInput/AppInput";
import { useState, useEffect } from "react";
import CheckBox from "../../components/CheckBox/CheckBox";
import styles from "./styles";
import Icon from "./assets/Icon";
import moment from "moment";

function TodoItem({
  route: {
    params: { todo },
  },
  navigation,
}) {
  const [title, setTitle] = useState(todo ? todo.title : "Title");
  const [description, setDescription] = useState(
    todo ? todo.description : "Description"
  );
  const [subtasks, setSubtasks] = useState(todo ? todo.subtasks : []);
  const [date, setDate] = useState(
    todo ? todo.date : moment().format("MMM, DDD")
  );
  const [dueDate, setDueDate] = useState(todo ? todo.dueDate : "Due date");
  const [done, setDone] = useState(todo ? todo.done : false);

  const onSubtaskInputChange = (value, id) => {
    if (!value)
      setSubtasks((prevSubTasks) =>
        prevSubTasks.filter((subtask) => subtask.id !== id)
      );
    else {
      setSubtasks((prevSubTasks) => {
        let newSubtasks = [...prevSubTasks].map((subtask) => {
          subtask = { ...subtask };
          if (subtask.id === id) {
            subtask.text = value;
          }

          return subtask;
        });

        return [...newSubtasks];
      });
    }
  };

  const onSubtaskCheckboxChange = (value, id) => {
    setSubtasks((prevSubTasks) => {
      let newSubtasks = [...prevSubTasks].map((subtask) => {
        subtask = { ...subtask };
        if (subtask.id === id) {
          subtask.done = value;
        }

        return subtask;
      });

      return [...newSubtasks];
    });
  };

  const addSubtask = () => {
    let id = subtasks.length ? subtasks[subtasks.length - 1].id + 1 : 1;
    let text = "New subtask";
    let done = false;
    let newSubtask = { text, done, id };
    setSubtasks((prevSubTasks) => [...prevSubTasks, newSubtask]);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollview}>
        <View style={styles.header}>
          <TouchableOpacity
            activeOpacity={0.5}
            hitSlop={{ top: 40, left: 40, right: 40, bottom: 30 }}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AppText fontWeight={"700"} style={{ fontSize: 12 }}>
              CANCEL
            </AppText>
          </TouchableOpacity>
          <View style={styles.titleView}>
            <CheckBox defaultValue={done} />
            <AppInput
              value={title}
              fontWeight={"700"}
              autoFocus={true}
              style={styles.titleInput}
              onChangeText={(text) => {
                setTitle(text);
              }}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            hitSlop={{ top: 40, left: 40, right: 40, bottom: 30 }}
          >
            <AppText
              fontWeight={"700"}
              style={{ color: "#33CA7F", fontSize: 12 }}
            >
              SAVE
            </AppText>
          </TouchableOpacity>
        </View>
        <View style={styles.main}>
          <View style={styles.top}>
            <AppInput
              value={description}
              multiline={true}
              onChangeText={(text) => {
                setDescription(text);
              }}
            ></AppInput>
          </View>
          <View style={styles.subtasks}>
            <AppText style={styles.sectionTitle} fontWeight={"700"}>
              SUBTASKS
            </AppText>

            <View style={styles.subtasksContainer}>
              {subtasks.map((subtask) => (
                <View style={styles.subtaskContainer} key={subtask.id}>
                  <CheckBox
                    defaultValue={subtask.done}
                    onChange={(value) => {
                      onSubtaskCheckboxChange(value, subtask.id);
                    }}
                  />
                  <AppInput
                    value={subtask.text}
                    onChangeText={(value) => {
                      onSubtaskInputChange(value, subtask.id);
                    }}
                    style={styles.subtaskInput}
                  />
                </View>
              ))}
            </View>

            <TouchableOpacity
              style={styles.addSubtask}
              activeOpacity={0.5}
              hitSlop={{ top: 0, bottom: 20, left: 20, right: 20 }}
              onPress={addSubtask}
            >
              <Icon />
              <AppText style={styles.addSubtaskText}>Add subtask</AppText>
            </TouchableOpacity>
          </View>
          <View style={styles.dueDate}>
            <AppText style={styles.sectionTitle} fontWeight={"700"}>
              DUE DATE
            </AppText>
            <AppInput
              value={dueDate}
              onChangeText={(text) => {
                setDueDate(text);
              }}
            ></AppInput>
          </View>
        </View>
      </ScrollView>
      <View style={styles.circle1}></View>
      <View style={styles.circle2}></View>
    </View>
  );
}

export default TodoItem;

import { View, TouchableOpacity, ScrollView, BackHandler } from "react-native";
import AppText from "../../components/AppText/AppText";
import AppInput from "../../components/AppInput/AppInput";
import { useState, useEffect } from "react";
import CheckBox from "../../components/CheckBox/CheckBox";
import styles from "./styles";
import Icon from "./assets/Icon";
import moment from "moment";
import useGlobalState from "../../hooks/useGlobalState";
import Todo from "../../classes/Todo";
import Ellipsis from "../../components/Ellipsis/Ellipsis";
import DeleteModal from "./components/DeleteModal/DeleteModal";

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
    todo ? todo.date : moment().format("MMM, DD")
  );
  const [dueDate, setDueDate] = useState(todo ? todo.dueDate : "Due date");
  const [done, setDone] = useState(todo ? todo.done : false);

  const [deleteModalActive, setDeleteModalActive] = useState(false);

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
    let text = "";
    let done = false;
    let newSubtask = { text, done, id };
    setSubtasks((prevSubTasks) => [...prevSubTasks, newSubtask]);
  };

  const [global, setGlobal, refreshGlobal] = useGlobalState();

  const save = () => {
    let id = todo ? todo.id : global.todos.length ? global.todos[0].id + 1 : 1;

    let timestamp = todo ? todo.timestamp : Date.now();

    let newTodo = new Todo(
      title,
      description,
      subtasks,
      date,
      id,
      timestamp,
      done,
      dueDate
    );

    let newGlobal = { ...global };

    if (!todo) {
      newGlobal.todos.unshift(newTodo);
      setGlobal(newGlobal);
    } else {
      newGlobal.todos.forEach((item, i) => {
        if (item.id === id) {
          newGlobal.todos[i] = newTodo;
        }
      });
      setGlobal(newGlobal);
    }

    navigation.goBack();
  };

  const options = [
    {
      name: "Delete",
      action: () => {
        setDeleteModalActive(true);
      },
    },
  ];

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        save();
        return true;
      }
    );

    return () => backHandler.remove();
  });

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollview} keyboardShouldPersistTaps="handled">
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
            <CheckBox
              defaultValue={done}
              onChange={(value) => {
                setDone(value);
              }}
            />
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
            onPress={save}
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
            {todo && <Ellipsis options={options} />}
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
      {todo && (
        <DeleteModal
          active={deleteModalActive}
          setActive={setDeleteModalActive}
          id={todo.id}
          navigation={navigation}
        />
      )}
    </View>
  );
}

export default TodoItem;

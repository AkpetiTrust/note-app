import { useRef, useEffect, useState } from "react";
import { View, TouchableOpacity, Animated, Keyboard } from "react-native";
import AppText from "../AppText/AppText";
import AppInput from "../AppInput/AppInput";
import Select from "../Select/Select";
import styles from "./styles";
import moment from "moment";
import Note from "../../classes/Note";

function AddNote({ active, setActive, setGlobal, global }) {
  let categories = global.categories;

  const [title, setTitle] = useState("Title");
  const [category, setCategory] = useState("Personal");
  const [text, setText] = useState("");

  const reset = () => {
    setTitle("Title");
    setCategory("Personal");
    setText("");
  };

  const save = () => {
    if (!text || !title) return;
    let categoryObject = categories.find((item) => item.name === category);
    let note = new Note(title, text, categoryObject, null, null, Date.now());
    let id = global.notes[0]?.id + 1;
    if (isNaN(id)) id = 1;
    let date = {
      short: `${moment().format("MMM")}, ${new Date().getDate()}`,
      long: `${moment().format(
        "MMM"
      )} ${new Date().getDate()}, ${new Date().getFullYear()}`,
    };
    note.id = id;
    note.date = date;
    let newGlobal = { ...global };
    newGlobal.notes.unshift(note);
    setGlobal(newGlobal);
    setActive(false);
    reset();
    Keyboard.dismiss();
  };

  const translateAnim = useRef(new Animated.Value(1000)).current;
  let containerStyles;
  if (active) {
    Animated.timing(translateAnim, {
      toValue: 0,
      duration: 300,
      delay: 0,
      useNativeDriver: true,
    }).start();
  } else {
    Animated.timing(translateAnim, {
      toValue: 1000,
      duration: 300,
      delay: 0,
      useNativeDriver: true,
    }).start();
  }

  containerStyles = {
    ...styles.container,
    transform: [{ translateY: translateAnim }],
  };

  return (
    <Animated.View style={containerStyles}>
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.5}
          hitSlop={{ top: 40, left: 40, right: 40, bottom: 10 }}
          onPress={() => {
            setActive(false);
            Keyboard.dismiss();
          }}
        >
          <AppText fontWeight={"700"} style={{ fontSize: 12 }}>
            CANCEL
          </AppText>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={save}
          hitSlop={{ top: 40, left: 40, right: 40, bottom: 10 }}
        >
          <AppText
            fontWeight={"700"}
            style={{ color: "#33CA7F", fontSize: 12 }}
          >
            SAVE
          </AppText>
        </TouchableOpacity>
      </View>

      <Select
        options={categories}
        style={styles.select}
        defaultValue={category}
        key={category}
        onChange={(value) => {
          setCategory(value);
        }}
      />

      <AppInput
        style={styles.input}
        fontWeight="500"
        value={title}
        onChange={(e) => {
          setTitle(e.nativeEvent.text);
        }}
      />
      <AppInput
        multiline={true}
        style={styles.textarea}
        placeholder={"Write note..."}
        placeholderTextColor="rgba(41, 45, 50, 0.51)"
        value={text}
        onChange={(e) => {
          setText(e.nativeEvent.text);
        }}
      />
    </Animated.View>
  );
}

export default AddNote;

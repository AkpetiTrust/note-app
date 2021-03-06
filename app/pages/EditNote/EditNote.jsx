import { useState } from "react";
import { View, TouchableOpacity, Keyboard, ToastAndroid } from "react-native";
import AppText from "../../components/AppText/AppText";
import AppInput from "../../components/AppInput/AppInput";
import Select from "../../components/Select/Select";
import styles from "./styles";
import useGlobalState from "../../hooks/useGlobalState";
import moment from "moment";
import Note from "../../classes/Note";

function EditNote({
  route: {
    params: { noteProp },
  },
  navigation,
}) {
  const [global, setGlobal, refreshGlobal] = useGlobalState();

  let categories = global.categories;

  const [title, setTitle] = useState(noteProp.title);
  const [category, setCategory] = useState(noteProp.category);
  const [text, setText] = useState(noteProp.text);

  const save = () => {
    if (!text || !title) {
      ToastAndroid.show(
        "Title or note can't be left empty",
        ToastAndroid.SHORT
      );
      return;
    }
    let categoryObject = categories.find((item) => item.name === category);
    let note = new Note(
      title,
      text,
      categoryObject,
      noteProp.date,
      noteProp.id,
      noteProp.timestamp
    );
    note.lastEdited = `${moment().format(
      "MMM"
    )} ${new Date().getDate()}, ${new Date().getFullYear()}`;
    let newGlobal = { ...global };
    newGlobal.notes.forEach((item, i) => {
      if (item.id === note.id) {
        newGlobal.notes[i] = note;
      }
    });
    setGlobal(newGlobal);
    navigation.pop(2);
  };

  let containerStyles;

  containerStyles = {
    ...styles.container,
  };

  return (
    <View style={containerStyles}>
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.5}
          hitSlop={{ top: 40, left: 40, right: 40, bottom: 10 }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AppText fontWeight={"700"} style={{ fontSize: 12 }}>
            CANCEL
          </AppText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={save}
          activeOpacity={0.5}
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
        autoFocus={true}
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
      <View style={styles.lastEdited}>
        <AppText>
          Last Edited:{" "}
          {noteProp.lastEdited ? noteProp.lastEdited : noteProp.date.long}
        </AppText>
      </View>
    </View>
  );
}

export default EditNote;

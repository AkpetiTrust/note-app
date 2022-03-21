import { useRef, useEffect, useState } from "react";
import { View, TouchableOpacity, Keyboard } from "react-native";
import AppText from "../../components/AppText/AppText";
import AppInput from "../../components/AppInput/AppInput";
import Select from "../../components/Select/Select";
import styles from "./styles";

function AddNote({
  route: {
    params: { noteProp },
  },
  navigation,
}) {
  const [categories, setCategories] = useState([
    {
      name: "Personal",
      color: {
        r: 31,
        g: 84,
        b: 164,
      },
    },
    {
      name: "Academics",
      color: {
        r: 232,
        g: 26,
        b: 26,
      },
    },
    {
      name: "Work",
      color: {
        r: 248,
        g: 141,
        b: 17,
      },
    },
  ]);

  let containerStyles;

  containerStyles = {
    ...styles.container,
  };

  return (
    <View style={containerStyles}>
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AppText fontWeight={"700"} style={{ fontSize: 12 }}>
            CANCEL
          </AppText>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
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
        defaultValue={noteProp.category}
      />

      <AppInput
        style={styles.input}
        fontWeight="500"
        defaultValue={noteProp.title}
        autoFocus={true}
      />
      <AppInput
        multiline={true}
        style={styles.textarea}
        placeholder={"Write note..."}
        placeholderTextColor="rgba(41, 45, 50, 0.51)"
        defaultValue={noteProp.text}
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

export default AddNote;

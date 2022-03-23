import { View, ScrollView, BackHandler } from "react-native";
import AppText from "../../components/AppText/AppText";
import Search from "../../components/Search/Search";
import BackButton from "../../components/BackButton/BackButton";
import PlusButton from "../../components/PlusButton/PlusButton";
import MonthSection from "./components/MonthSection/MonthSection";
import AddNote from "../../components/AddNote/AddNote";
import Menu from "../../components/Menu/Menu";
import useGlobalState from "../../hooks/useGlobalState";
import styles from "./styles";
import parseNotes from "./functions/parseNotes";
import { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import Ellipsis from "../../components/Ellipsis/Ellipsis";
import DeleteCategory from "./components/DeleteCategory/DeleteCategory";
import AddCategory from "../Categories/components/AddCategory/AddCategory";

function AllNotes({ navigation, route }) {
  const [global, setGlobal, refreshGlobal] = useGlobalState();

  const isFocused = useIsFocused();

  useEffect(() => {
    refreshGlobal();
  }, [isFocused]);

  let notesInfo = { number: global.notes.length };

  let notes = parseNotes(global.notes);

  const [addNotesActive, setAddNotesActive] = useState(false);
  const [isCategory, setIsCategory] = useState(!!route?.params?.category);
  const [deleteActive, setDeleteActive] = useState(false);
  const [addCategoryActive, setAddCategoryActive] = useState(false);
  const [category, setCategory] = useState(route?.params?.category);

  const options = [
    {
      name: "Delete",
      action: () => {
        setDeleteActive(true);
      },
    },
    {
      name: "Edit",
      action: () => {
        setAddCategoryActive(true);
      },
    },
  ];

  if (isCategory) {
    notes = parseNotes(
      global.notes.filter((note) => note.category === category)
    );
  }

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        if (addNotesActive) {
          setAddNotesActive(false);
          return true;
        } else {
          return false;
        }
      }
    );

    return () => backHandler.remove();
  });

  const save = (name, description, categoryColor) => {
    let newGlobal = { ...global };
    newGlobal.notes.forEach((note, i) => {
      if (note.category === category) {
        newGlobal.notes[i].category = name;
        newGlobal.notes[i].color = categoryColor;
      }
    });

    newGlobal.categories.forEach((item, i) => {
      if (item.name === category) {
        newGlobal.categories[i].name = name;
        newGlobal.categories[i].description = description;
        newGlobal.categories[i].color = categoryColor;
      }
    });

    setCategory(name);
    setGlobal(newGlobal);
    notes = parseNotes(global.notes.filter((note) => note.category === name));
    setAddCategoryActive(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollview}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={styles.header}>
          <BackButton navigation={navigation} style={styles.back_button} />
          <AppText fontWeight={"700"} style={styles.title}>
            {isCategory ? category : "ALL NOTES"}
          </AppText>
        </View>
        <View>
          <Search style={styles.search} />
          {isCategory && <Ellipsis options={options} style={styles.ellipsis} />}
        </View>
        {notes.map((month) => (
          <MonthSection
            month={month}
            key={month.month}
            navigation={navigation}
          />
        ))}

        {!isCategory && (
          <AppText style={styles.info} fontWeight={"600"}>
            YOU HAVE {notesInfo.number}{" "}
            {notesInfo.number === 1 ? "NOTE" : "NOTES"}
          </AppText>
        )}
      </ScrollView>
      <PlusButton
        onPress={() => {
          setAddNotesActive(true);
        }}
      />
      <AddNote
        active={addNotesActive}
        setActive={setAddNotesActive}
        global={global}
        setGlobal={setGlobal}
      />
      <Menu navigation={navigation} />
      {isCategory && (
        <DeleteCategory
          active={deleteActive}
          setActive={setDeleteActive}
          category={category}
          navigation={navigation}
        />
      )}
      {isCategory && (
        <AddCategory
          active={addCategoryActive}
          setActive={setAddCategoryActive}
          category={global.categories.find((item) => item.name === category)}
          navigation={navigation}
          save={save}
        />
      )}
    </View>
  );
}

export default AllNotes;

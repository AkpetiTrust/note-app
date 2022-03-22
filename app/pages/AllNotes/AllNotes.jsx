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
  let category = route?.params?.category;

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

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollview}>
        <View style={styles.header}>
          <BackButton navigation={navigation} style={styles.back_button} />
          <AppText fontWeight={"700"} style={styles.title}>
            {isCategory ? category : "ALL NOTES"}
          </AppText>
        </View>
        <Search style={styles.search} />
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
    </View>
  );
}

export default AllNotes;

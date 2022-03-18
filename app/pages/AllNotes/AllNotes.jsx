import { View, ScrollView } from "react-native";
import AppText from "../../components/AppText/AppText";
import Search from "../../components/Search/Search";
import BackButton from "../../components/BackButton/BackButton";
import PlusButton from "../../components/PlusButton/PlusButton";
import MonthSection from "./components/MonthSection/MonthSection";
import AddNote from "../../components/AddNote/AddNote";
import Menu from "../../components/Menu/Menu";
import styles from "./styles";
import { useState } from "react";

function AllNotes({ navigation }) {
  const [months, setMonths] = useState([
    {
      month: "April, 2022",
      notes: [
        {
          title: "So this happened today...",
          text: "So this happened today",
          category: "Personal",
          date: "Apr, 25",
          color: {
            r: 31,
            g: 84,
            b: 164,
          },
        },
        {
          title: "GSTs man 😢",
          text: "GSTs man 😢",
          category: "Academics",
          date: "Apr, 26",
          color: {
            r: 232,
            g: 26,
            b: 26,
          },
        },
      ],
    },
    {
      month: "May, 2022",
      notes: [
        {
          title: "Omooo, what's going on",
          text: "Omooo, what's going on",
          category: "Personal",
          date: "May, 25",
          color: {
            r: 31,
            g: 84,
            b: 164,
          },
        },
        {
          title: "Been working on this project for years 😪",
          text: "Been working on this project for years 😪",
          category: "Work",
          date: "May, 26",
          color: {
            r: 248,
            g: 141,
            b: 17,
          },
        },
      ],
    },
  ]);

  const [notesInfo, setNotesInfo] = useState({ number: 4 });
  const [addNotesActive, setAddNotesActive] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollview}>
        <View style={styles.header}>
          <BackButton navigation={navigation} style={styles.back_button} />
          <AppText fontWeight={"700"} style={styles.title}>
            ALL NOTES
          </AppText>
        </View>
        <Search style={styles.search} />
        {months.map((month) => (
          <MonthSection
            month={month}
            key={month.month}
            navigation={navigation}
          />
        ))}

        <AppText style={styles.info} fontWeight={"600"}>
          YOU HAVE {notesInfo.number} NOTES
        </AppText>
      </ScrollView>
      <PlusButton
        onPress={() => {
          setAddNotesActive(true);
        }}
      />
      <AddNote active={addNotesActive} setActive={setAddNotesActive} />
      <Menu navigation={navigation} />
    </View>
  );
}

export default AllNotes;

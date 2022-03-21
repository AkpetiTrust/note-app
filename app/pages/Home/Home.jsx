import { useState, useEffect } from "react";
import { ScrollView, View, BackHandler } from "react-native";
import styles from "./styles";
import AppText from "../../components/AppText/AppText";
import Button from "../../components/Button/Button";
import Search from "../../components/Search/Search";
import Illustration from "./assets/Illustration";
import HomeNote from "./components/HomeNote";
import PlusButton from "../../components/PlusButton/PlusButton";
import AddNote from "../../components/AddNote/AddNote";
import Menu from "../../components/Menu/Menu";
import Logo from "../../components/Logo/Logo";
import { useIsFocused } from "@react-navigation/native";
import useGlobalState from "../../hooks/useGlobalState";

export default function Home({ navigation }) {
  const [global, setGlobal, refreshGlobal] = useGlobalState();

  const [addNotesActive, setAddNotesActive] = useState(false);

  const isFocused = useIsFocused();

  useEffect(() => {
    refreshGlobal();
  }, [isFocused]);

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
        <Logo />
        <AppText style={styles.heading} fontWeight="600">
          WELCOME
        </AppText>
        <AppText>
          This is your safe space. You can tell your notes anything.
        </AppText>
        <Button
          style={styles.button}
          fontSize={12}
          color="#fff"
          onPress={() => {
            navigation.navigate("AllNotes");
          }}
        >
          GO TO NOTES
        </Button>
        <Search />
        <View style={styles.illustration_container}>
          <Illustration />
        </View>
        <View style={styles.recent}>
          <AppText fontWeight="600">Recent</AppText>
          <View style={styles.notes_container}>
            {[...global.notes].splice(0, 4).map((note) => (
              <HomeNote noteProp={note} key={note.id} navigation={navigation} />
            ))}
          </View>
        </View>
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

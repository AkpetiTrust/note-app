import { useState } from "react";
import { ScrollView, View } from "react-native";
import styles from "./styles";
import AppText from "../../components/AppText/AppText";
import Button from "../../components/Button/Button";
import Search from "../../components/Search/Search";
import Illustration from "./assets/Illustration";
import HomeNote from "./components/HomeNote";
import PlusButton from "../../components/PlusButton/PlusButton";
import Logo from "../../components/Logo/Logo";

export default function Home() {
  const [notes, setNotes] = useState([
    {
      title: "GSTs man 😥",
      text: "Omo these courses are really long, hope I finish them before so so so. I wonder when ASUU will call of strike so I can...",
      category: "Academics",
      date: "Apr, 26",
      color: {
        r: 232,
        g: 26,
        b: 26,
      },
    },
    {
      title: "Omoooo, what’s going on",
      text: "This is some piece of text. I really can’t think of what to type right now, but pretend I’m saying something related to the title. Also...",
      category: "Personal",
      date: "May, 25",
      color: {
        r: 31,
        g: 84,
        b: 164,
      },
    },
  ]);

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
        <Button style={styles.button} fontSize={12} color="#fff">
          GO TO NOTES
        </Button>
        <Search />
        <View style={styles.illustration_container}>
          <Illustration />
        </View>
        <View style={styles.recent}>
          <AppText fontWeight="600">Recent</AppText>
          <View style={styles.notes_container}>
            {notes.map((note) => (
              <HomeNote noteProp={note} key={note.text} />
            ))}
          </View>
        </View>
      </ScrollView>
      <PlusButton />
    </View>
  );
}

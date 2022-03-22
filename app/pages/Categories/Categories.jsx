import { View, ScrollView, BackHandler, TouchableOpacity } from "react-native";
import styles from "./styles";
import AppText from "../../components/AppText/AppText";
import BackButton from "../../components/BackButton/BackButton";
import Menu from "../../components/Menu/Menu";
import Plus from "./assets/Plus";
import AddNote from "../../components/AddNote/AddNote";
import useGlobalState from "../../hooks/useGlobalState";
import PlusButton from "../../components/PlusButton/PlusButton";
import CategoryCard from "./components/CategoryCard";
import { useState, useEffect } from "react";

function Categories({ navigation }) {
  const [global, setGlobal, refreshGlobal] = useGlobalState();
  const [addNotesActive, setAddNotesActive] = useState(false);

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
      <ScrollView style={styles.inner}>
        <View style={styles.header}>
          <BackButton navigation={navigation} style={styles.back_button} />
          <AppText fontWeight={"700"} style={styles.title}>
            CATEGORIES
          </AppText>
        </View>
        <View>
          <View style={styles.talk}>
            <AppText>These are your note categories</AppText>
            <TouchableOpacity
              activeOpacity={0.5}
              hitSlop={{ top: 40, left: 40, right: 40, bottom: 40 }}
            >
              <Plus />
            </TouchableOpacity>
          </View>
          <View style={styles.grid}>
            {global.categories.map((category) => (
              <CategoryCard
                key={category.name}
                onPress={() => {
                  navigation.push("AllNotes", { category: category.name });
                }}
                category={category}
              />
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

export default Categories;

import {
  View,
  ScrollView,
  BackHandler,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import styles from "./styles";
import AppText from "../../components/AppText/AppText";
import BackButton from "../../components/BackButton/BackButton";
import Menu from "../../components/Menu/Menu";
import Plus from "./assets/Plus";
import AddNote from "../../components/AddNote/AddNote";
import useGlobalState from "../../hooks/useGlobalState";
import PlusButton from "../../components/PlusButton/PlusButton";
import CategoryCard from "./components/CategoryCard";
import AddCategory from "./components/AddCategory/AddCategory";
import Category from "../../classes/Category";
import { useIsFocused } from "@react-navigation/native";
import { useState, useEffect } from "react";

function Categories({ navigation }) {
  const [global, setGlobal, refreshGlobal] = useGlobalState();
  const [addNotesActive, setAddNotesActive] = useState(false);
  const [addCategoryActive, setAddCategoryActive] = useState(false);

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

  const save = (categoryName, description, color) => {
    if (!categoryName) {
      ToastAndroid.showWithGravity(
        "Specify a category name",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
      return;
    }

    if (
      global.categories.filter((category) => category.name === categoryName)
        .length
    ) {
      ToastAndroid.showWithGravity(
        "That category name has been used before 😔",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
      return;
    }

    let id;
    if (global.categories.length) {
      id = global.categories[global.categories.length - 1].id + 1;
    } else {
      id = 1;
    }

    let newCategory = new Category(categoryName, color, id, description);

    let newGlobal = { ...global };

    newGlobal.categories.push(newCategory);

    setGlobal(newGlobal);
    setAddCategoryActive(false);
  };

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
              onPress={() => {
                setAddCategoryActive(true);
              }}
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
      <AddCategory
        active={addCategoryActive}
        setActive={setAddCategoryActive}
        save={save}
      />
      <Menu navigation={navigation} />
    </View>
  );
}

export default Categories;

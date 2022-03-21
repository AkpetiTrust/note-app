import { View, ScrollView, TouchableOpacity } from "react-native";
import AppText from "../../components/AppText/AppText";
import BackButton from "../../components/BackButton/BackButton";
import EditButton from "./components/EditButton/EditButton";
import Menu from "../../components/Menu/Menu";
import Ellipsis from "../../components/Ellipsis/Ellipsis";
import { useState } from "react";
import DeleteModal from "./components/DeleteModal/DeleteModal";
import styles from "./styles";

function Note({
  route: {
    params: { noteProp },
  },
  navigation,
}) {
  const [deleteActive, setDeleteActive] = useState(false);

  // Storing a function as state
  const [edit, setEdit] = useState(() => () => {
    navigation.navigate("EditNote", { noteProp });
  });

  const [options, setOptions] = useState([
    {
      name: "Delete",
      action: () => {
        setDeleteActive(true);
      },
    },
    {
      name: "Edit",
      action: edit,
    },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.inner}>
        <View style={styles.header}>
          <BackButton navigation={navigation} style={styles.back_button} />
        </View>
        <View style={styles.main}>
          <AppText fontWeight={"700"} style={styles.title}>
            {noteProp.title}
          </AppText>
          <TouchableOpacity activeOpacity={0.5} onPress={edit}>
            <AppText>{noteProp.text}</AppText>
          </TouchableOpacity>
          <View style={styles.info}>
            <TouchableOpacity
              style={{
                ...styles.label,
                backgroundColor: `rgb(${noteProp.color.r}, ${noteProp.color.g}, ${noteProp.color.b})`,
              }}
              activeOpacity={0.6}
            >
              <AppText style={styles.labelText}>{noteProp.category}</AppText>
            </TouchableOpacity>
            <AppText style={styles.date} fontWeight="700">
              {noteProp.date}
            </AppText>
            <Ellipsis options={options} />
          </View>
          <View style={styles.lastEdited}>
            <AppText>
              Last Edited:{" "}
              {noteProp.lastEdited ? noteProp.lastEdited : noteProp.date}
            </AppText>
          </View>
        </View>
      </ScrollView>
      <Menu navigation={navigation} />
      <EditButton onPress={edit} />
      <DeleteModal active={deleteActive} setActive={setDeleteActive} />
    </View>
  );
}

export default Note;

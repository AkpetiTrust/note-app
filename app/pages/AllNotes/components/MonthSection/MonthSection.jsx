import { View } from "react-native";
import AppText from "../../../../components/AppText/AppText";
import NotePreview from "../NotePreview/NotePreview";

function MonthSection({ month, navigation }) {
  return (
    <View style={{ marginBottom: 30 }}>
      <AppText style={{ fontSize: 15, marginBottom: 10 }} fontWeight={"700"}>
        {month.month}
      </AppText>
      {month.notes.map((note) => (
        <NotePreview noteProp={note} key={note.text} navigation={navigation} />
      ))}
    </View>
  );
}

export default MonthSection;

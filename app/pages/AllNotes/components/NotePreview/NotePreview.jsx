import { View, TouchableOpacity } from "react-native";
import AppText from "../../../../components/AppText/AppText";

function NotePreview({ noteProp, navigation }) {
  const color = noteProp.color;

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{
        paddingLeft: 15,
        position: "relative",
        paddingBottom: 20,
        borderBottomColor: "rgba(0,0,0,0.29)",
        borderBottomWidth: 1,
        marginBottom: 20,
      }}
      onPress={() => {
        navigation.push("Note", { noteProp });
      }}
    >
      <View
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          height: "100%",
          width: 5,
          backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`,
        }}
      >
        {/* Rectangle */}
      </View>
      <AppText>{noteProp.title}</AppText>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <AppText
          style={{
            color: `rgb(${color.r}, ${color.g}, ${color.b})`,
            fontSize: 12,
            marginRight: 10,
          }}
        >
          {noteProp.category}
        </AppText>
        <AppText style={{ fontSize: 12 }} fontWeight="600">
          {noteProp.date.short}
        </AppText>
      </View>
    </TouchableOpacity>
  );
}

export default NotePreview;

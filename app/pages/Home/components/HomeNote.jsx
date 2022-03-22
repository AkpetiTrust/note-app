import { View, TouchableOpacity } from "react-native";
import AppText from "../../../components/AppText/AppText";

function HomeNote({ noteProp, navigation }) {
  let color = noteProp.color;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        padding: 20,
        backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, 0.12)`,
        borderRadius: 10,
        paddingTop: 10,
        marginBottom: 30,
      }}
      onPress={() => {
        navigation.push("Note", { noteProp });
      }}
    >
      <AppText fontWeight="600">{noteProp.title}</AppText>
      <AppText numberOfLines={3} style={{ marginBottom: 10 }}>
        {noteProp.text}
      </AppText>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <AppText
          fontWeight="600"
          style={{
            color: "rgba(24, 24, 24, 0.51)",
            fontSize: 13,
            marginRight: 12,
          }}
        >
          {noteProp.category}
        </AppText>
        <AppText
          fontWeight="600"
          style={{ color: "rgba(24, 24, 24, 0.51)", fontSize: 13 }}
        >
          {noteProp.date.short}
        </AppText>
      </View>
    </TouchableOpacity>
  );
}

export default HomeNote;

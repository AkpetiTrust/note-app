import { View, TouchableOpacity } from "react-native";
import AppText from "../../../components/AppText/AppText";

function HomeNote({ noteProp }) {
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
    >
      <AppText fontWeight="600">{noteProp.title}</AppText>
      <AppText numberOfLines={3} style={{ marginBottom: 10 }}>
        {noteProp.text}
      </AppText>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "50%",
        }}
      >
        <AppText
          fontWeight="600"
          style={{ color: "rgba(24, 24, 24, 0.51)", fontSize: 13 }}
        >
          {noteProp.category}
        </AppText>
        <AppText
          fontWeight="600"
          style={{ color: "rgba(24, 24, 24, 0.51)", fontSize: 13 }}
        >
          {noteProp.date}
        </AppText>
      </View>
    </TouchableOpacity>
  );
}

export default HomeNote;

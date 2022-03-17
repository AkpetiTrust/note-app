import { TouchableOpacity } from "react-native";
import AppText from "../../../AppText/AppText";

function Link({ link: { navigation, to, text, icon }, setMenuActive }) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(to);
        setMenuActive(false);
      }}
      activeOpacity={0.6}
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
      }}
    >
      <AppText fontWeight={"600"} style={{ fontSize: 16, marginRight: 13 }}>
        {text}
      </AppText>
      {icon}
    </TouchableOpacity>
  );
}

export default Link;

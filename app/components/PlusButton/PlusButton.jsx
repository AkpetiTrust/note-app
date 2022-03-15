import { TouchableOpacity, Platform } from "react-native";
import Icon from "./Icon";

function PlusButton({ onPress }) {
  let boxShadow;
  if (Platform.OS === "ios") {
    boxShadow = {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
    };
  } else if (Platform.OS === "android") {
    boxShadow = {
      elevation: 10,
      shadowColor: "rgba(0,0,0,0.25)",
    };
  }
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={{
        ...boxShadow,
        position: "absolute",
        bottom: 40,
        right: 20,
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#33CA7F",
      }}
    >
      <Icon />
    </TouchableOpacity>
  );
}

export default PlusButton;

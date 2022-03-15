import AppText from "../AppText/AppText";
import { TouchableOpacity } from "react-native";

function Button({ children, style, color, fontSize, onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{
        ...style,
        height: 30,
        justifyContent: "center",
        alignSelf: "flex-start",
      }}
    >
      <AppText
        style={{
          color,
          fontSize,
        }}
        fontWeight="600"
      >
        {children}
      </AppText>
    </TouchableOpacity>
  );
}

export default Button;

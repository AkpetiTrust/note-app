import AppText from "../AppText/AppText";
import { TouchableOpacity } from "react-native";

function Button({ children, style, color, fontSize }) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
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
          includeFontPadding: false,
        }}
        fontWeight="600"
      >
        {children}
      </AppText>
    </TouchableOpacity>
  );
}

export default Button;

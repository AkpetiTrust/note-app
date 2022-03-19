import { TouchableOpacity } from "react-native";
import Icon from "./Icon";

function BackButton({ navigation, style }) {
  return (
    <TouchableOpacity
      style={style}
      onPress={navigation.goBack}
      activeOpacity={0.8}
    >
      <Icon />
    </TouchableOpacity>
  );
}

export default BackButton;

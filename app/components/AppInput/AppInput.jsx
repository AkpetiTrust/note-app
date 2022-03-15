import { TextInput, Text } from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";

function AppInput(props) {
  let [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });

  const fontWeight = props.fontWeight;
  let fontFamily;

  if (fontWeight === "700") {
    fontFamily = "Poppins_700Bold";
  } else if (fontWeight === "600") {
    fontFamily = "Poppins_600SemiBold";
  } else if (fontWeight === "500") {
    fontFamily = "Poppins_500Medium";
  } else {
    fontFamily = "Poppins_400Regular";
  }

  let style = { ...props.style, fontFamily };

  let finalProps = { ...props, style };

  if (!fontLoaded) return <Text></Text>; //Loading

  return <TextInput {...finalProps} />;
}

export default AppInput;

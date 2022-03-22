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
    400: Poppins_400Regular,
    500: Poppins_500Medium,
    600: Poppins_600SemiBold,
    700: Poppins_700Bold,
    800: Poppins_800ExtraBold,
  });

  let fontFamily = props.fontWeight;

  let style = {
    ...props.style,
    fontFamily,
    fontWeight: "normal",
    includeFontPadding: false,
  };

  let finalProps = { ...props, style };

  if (!fontLoaded) return <Text></Text>; //Loading

  return <TextInput {...finalProps} />;
}

export default AppInput;

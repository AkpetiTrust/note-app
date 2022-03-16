import { Text } from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";

function AppText({ children, style, fontWeight, numberOfLines }) {
  let [fontLoaded] = useFonts({
    400: Poppins_400Regular,
    500: Poppins_500Medium,
    600: Poppins_600SemiBold,
    700: Poppins_700Bold,
    800: Poppins_800ExtraBold,
  });

  let fontFamily = fontWeight ? fontWeight : "400";

  if (!fontLoaded) return <Text></Text>; //Loading

  return (
    <Text
      style={{
        color: "#181818",
        ...style,
        fontFamily,
        includeFontPadding: false,
      }}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
}

export default AppText;

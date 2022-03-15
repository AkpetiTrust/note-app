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
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });

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

  if (!fontLoaded) return <Text>...</Text>; //Loading

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

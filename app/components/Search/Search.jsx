import { useState } from "react";
import Icon from "./Icon";

import { TextInput, Text, View } from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

function Search({ style }) {
  let [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  const [fontFamily, setFontFamily] = useState("Poppins_600SemiBold");
  const [value, setValue] = useState("");

  if (!fontLoaded) return <Text>...</Text>; //Loading

  return (
    <View style={{ position: "relative", ...style }}>
      <TextInput
        placeholder="Search"
        placeholderTextColor={"rgba(0, 0, 0, 0.6)"}
        autoComplete="off"
        value={value}
        onChangeText={(text) => {
          if (!text) {
            setFontFamily("Poppins_600Regular");
          } else {
            setFontFamily("Poppins_400SemiBold");
          }

          setValue(text);
        }}
        style={{
          borderRadius: 8,
          width: "100%",
          backgroundColor: "#F1F1F1",
          paddingLeft: 30,
          fontFamily,
          includeFontPadding: false,
        }}
      />
      <Icon
        style={{
          position: "absolute",
          left: 4,
          top: "10%",
          tranform: [{ scale: 2 }],
        }}
      />
    </View>
  );
}

export default Search;

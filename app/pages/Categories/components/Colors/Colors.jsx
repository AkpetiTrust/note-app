import { View, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import Color from "./Color";
import AppText from "../../../../components/AppText/AppText";

function Colors({
  setCategoryColor,
  defaultColor,
  hookItems: [
    colors,
    activeColor,
    setActiveColor,
    parseColorObject,
    setColors,
    refresh,
  ],
}) {
  const [renders, setRenders] = useState(0);
  // Anytime colors change, I'll bring the renders back to 0
  useEffect(() => {
    setRenders(0);
  }, [colors]);

  useEffect(() => {
    let globalRenders = 0;
    if (defaultColor) {
      setRenders((prevRenders) => {
        globalRenders = prevRenders + 1;
        return globalRenders;
      });

      if (globalRenders <= 1) {
        setActiveColor(defaultColor);
        return;
      }
    }

    setCategoryColor(activeColor);
  }, [activeColor]);

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        {colors.map((color) => (
          <Color
            color={parseColorObject(color)}
            colorObject={color}
            key={parseColorObject(color)}
            active={parseColorObject(color) === parseColorObject(activeColor)}
            setActiveColor={setActiveColor}
          />
        ))}
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          refresh(setCategoryColor);
        }}
      >
        <AppText
          style={{
            fontSize: 12,
            color: "#8E81E1",
            textDecorationLine: "underline",
            textDecorationStyle: "solid",
            textDecorationColor: "#8E81E1",
          }}
        >
          MORE
        </AppText>
      </TouchableOpacity>
    </View>
  );
}

export default Colors;

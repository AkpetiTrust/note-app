import {
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  ScrollView,
  Keyboard,
} from "react-native";
import { useState, useRef, useEffect } from "react";
import AppText from "../AppText/AppText";
import Icon from "./Icon";
import { useWindowDimensions } from "react-native";

function Select({ options, defaultValue, onChange, style }) {
  const [activeOption, setActiveOption] = useState(
    defaultValue
      ? options.filter((option) => option.name === defaultValue)[0]
        ? options.filter((option) => option.name === defaultValue)[0]
        : options[0]
      : options[0]
  );

  const [popUpActive, setPopUpActive] = useState(false);

  const { height, width } = useWindowDimensions();

  let color = activeOption.color;

  useEffect(() => {
    setActiveOption(
      defaultValue
        ? options.filter((option) => option.name === defaultValue)[0]
          ? options.filter((option) => option.name === defaultValue)[0]
          : options[0]
        : options[0]
    );
  }, [options]);

  const inner = useRef(null);
  const handlePress = (e) => {
    const event = e.nativeEvent;
    inner.current.measure((fx, fy, width, height, px, py) => {
      if (
        event.pageX < px ||
        event.pageX > px + width ||
        event.pageY < py ||
        event.pageY > py + height
      ) {
        setPopUpActive(false);
      }
    });
  };

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.6}
        style={{
          ...style,
          backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, 0.12)`,
          paddingVertical: 5,
          borderRadius: 7,
          position: "relative",
        }}
        onPress={() => {
          Keyboard.dismiss();
          setPopUpActive(true);
        }}
      >
        <AppText
          fontWeight={"700"}
          style={{
            textAlign: "center",
            color: "rgba(24, 24, 24, 0.6)",
          }}
        >
          {activeOption.name.toUpperCase()}
        </AppText>
        <Icon style={{ position: "absolute", right: 5, top: 3 }} />
      </TouchableOpacity>
      {popUpActive && (
        <TouchableWithoutFeedback onPress={handlePress}>
          <View
            style={{
              position: "absolute",
              top: -80,
              left: -20,
              width: width,
              height: height + 80,
              backgroundColor: "rgba(0,0,0,0.25)",
              zIndex: 10,
              paddingHorizontal: 30,
            }}
          >
            <ScrollView
              style={{
                backgroundColor: "#fff",
                transform: [{ translateY: 200 }],
                borderRadius: 8,
                maxHeight: 200,
              }}
              ref={inner}
            >
              {options.map((option, i) => (
                <TouchableOpacity
                  key={option.name}
                  style={{
                    paddingVertical: 15,
                    paddingHorizontal: 20,
                    borderBottomColor: "rgba(0,0,0,0.5)",
                    borderBottomWidth: options.length - 1 === i ? 0 : 1,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  onPress={() => {
                    setActiveOption(
                      options.filter((item) => item.name === option.name)[0]
                    );
                    setPopUpActive(false);
                    onChange(option.name);
                  }}
                >
                  <View
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 5,
                      backgroundColor:
                        option.name === activeOption.name ? "blue" : "#ddd",
                    }}
                  ></View>

                  <AppText
                    style={{
                      marginLeft: 30,
                    }}
                  >
                    {option.name}
                  </AppText>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}

export default Select;

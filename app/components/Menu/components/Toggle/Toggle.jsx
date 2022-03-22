import { View, TouchableOpacity, Animated, StatusBar } from "react-native";
import { useState, useRef } from "react";

function Toggle({ onPress, active }) {
  const [width, setWidth] = useState(30);

  const rotate1 = useRef(new Animated.Value(0)).current;
  const rotate2 = useRef(new Animated.Value(0)).current;
  const translate1 = useRef(new Animated.Value(0)).current;
  const translate2 = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(1)).current;

  if (active) {
    Animated.timing(rotate1, {
      toValue: 45,
      duration: 300,
      useNativeDriver: true,
    }).start();
    Animated.timing(rotate2, {
      toValue: -45,
      duration: 300,
      useNativeDriver: true,
    }).start();
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    Animated.timing(translate1, {
      toValue: 11,
      duration: 300,
      useNativeDriver: true,
    }).start();
    Animated.timing(translate2, {
      toValue: -11,
      duration: 300,
      useNativeDriver: true,
    }).start();
  } else {
    Animated.timing(rotate1, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    Animated.timing(rotate2, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
    Animated.timing(translate1, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    Animated.timing(translate2, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }

  const rotate1style = rotate1.interpolate({
    inputRange: [0, 360],
    outputRange: ["0deg", "360deg"],
  });
  const rotate2style = rotate2.interpolate({
    inputRange: [0, 360],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        position: "absolute",
        top: StatusBar.currentHeight + 20,
        right: 30,
        width,
        zIndex: 10,
        elevation: 20,
      }}
    >
      <Animated.View
        style={{
          backgroundColor: "#DD8100",
          width: "100%",
          height: 4,
          marginBottom: 4,
          transform: [{ rotate: rotate1style }, { translateY: translate1 }],
        }}
      ></Animated.View>
      <Animated.View
        style={{
          backgroundColor: "#DD8100",
          width: "100%",
          height: 4,
          marginBottom: 4,
          opacity,
        }}
      ></Animated.View>
      <Animated.View
        style={{
          backgroundColor: "#DD8100",
          width: "100%",
          height: 4,
          marginBottom: 4,
          transform: [{ rotate: rotate2style }, { translateY: translate2 }],
        }}
      ></Animated.View>
    </TouchableOpacity>
  );
}

export default Toggle;

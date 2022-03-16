import { useRef, useEffect } from "react";
import { View, TouchableOpacity, Animated, Keyboard } from "react-native";
import AppText from "../AppText/AppText";
import AppInput from "../AppInput/AppInput";
import styles from "./styles";

function AddNote({ active, setActive }) {
  const translateAnim = useRef(new Animated.Value(1000)).current;
  let containerStyles;
  if (active) {
    Animated.timing(translateAnim, {
      toValue: 0,
      duration: 300,
      delay: 0,
      useNativeDriver: true,
    }).start();
  } else {
    Animated.timing(translateAnim, {
      toValue: 1000,
      duration: 300,
      delay: 0,
      useNativeDriver: true,
    }).start();
  }

  containerStyles = {
    ...styles.container,
    transform: [{ translateY: translateAnim }],
  };

  return (
    <Animated.View style={containerStyles}>
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            setActive(false);
            Keyboard.dismiss();
          }}
        >
          <AppText fontWeight={"700"}>CANCEL</AppText>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <AppText fontWeight={"700"} style={{ color: "#33CA7F" }}>
            SAVE
          </AppText>
        </TouchableOpacity>
      </View>
      <AppInput style={styles.input} fontWeight="500" defaultValue="Title" />
      <AppInput
        multiline={true}
        style={styles.textarea}
        placeholder={"Write note..."}
        placeholderTextColor="rgba(41, 45, 50, 0.51)"
      />
    </Animated.View>
  );
}

export default AddNote;

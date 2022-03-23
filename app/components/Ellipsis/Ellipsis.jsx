import { View, TouchableOpacity } from "react-native";
import AppText from "../AppText/AppText";
import styles from "./styles";
import { useState } from "react";

function Ellipsis({ options, style }) {
  const [active, setActive] = useState(false);
  if (!style) {
    style = {};
  }

  return (
    <View style={{ ...styles.ellipsis, ...style }}>
      <TouchableOpacity
        style={styles.dots}
        onPress={() => {
          setActive((prevValue) => !prevValue);
        }}
        hitSlop={{ top: 20, bottom: 50, left: 50, right: 50 }}
      >
        <View style={styles.circle}></View>
        <View style={styles.circle}></View>
        <View style={styles.circle}></View>
      </TouchableOpacity>
      {active && (
        <View style={styles.options}>
          {options.map((option) => (
            <View key={option.name}>
              <TouchableOpacity
                hitSlop={{ top: 10, bottom: 10, left: 0, right: 50 }}
                onPress={() => {
                  option.action();
                  setActive(false);
                }}
              >
                <AppText>{option.name}</AppText>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

export default Ellipsis;

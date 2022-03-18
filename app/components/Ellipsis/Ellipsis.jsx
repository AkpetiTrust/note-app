import { View, TouchableOpacity } from "react-native";
import AppText from "../AppText/AppText";
import styles from "./styles";
import { useState } from "react";

function Ellipsis({ options }) {
  const [active, setActive] = useState(false);

  return (
    <View style={styles.ellipsis}>
      <TouchableOpacity
        style={styles.dots}
        onPress={() => {
          setActive((prevValue) => !prevValue);
        }}
      >
        <View style={styles.circle}></View>
        <View style={styles.circle}></View>
        <View style={styles.circle}></View>
      </TouchableOpacity>
      {active && (
        <View style={styles.options}>
          {options.map((option) => (
            <TouchableOpacity
              key={option.name}
              onPress={() => {
                option.action();
                setActive(false);
              }}
            >
              <AppText>{option.name}</AppText>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

export default Ellipsis;

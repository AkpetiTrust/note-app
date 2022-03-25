import { View, TouchableOpacity } from "react-native";
import { useState } from "react";
import Svg, { Path } from "react-native-svg";

function CheckBox({ onChange, defaultValue, style }) {
  const [active, setActive] = useState(defaultValue);

  const inactiveJSX = (
    <View
      style={{
        width: 15,
        height: 15,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: "rgba(51, 202, 127, 1)",
        backgroundColor: "transparent",
      }}
    ></View>
  );

  const activeJSX = (
    <View
      style={{
        width: 15,
        height: 15,
        borderRadius: 5,
        backgroundColor: "rgba(51, 202, 127, 1)",
        aspectRatio: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M11.94 3.72187C12.004 3.65659 12.0804 3.60473 12.1646 3.56933C12.2489 3.53392 12.3394 3.51569 12.4308 3.51569C12.5222 3.51569 12.6127 3.53392 12.697 3.56933C12.7812 3.60473 12.8576 3.65659 12.9216 3.72187C13.1897 3.99281 13.1935 4.43062 12.931 4.70625L7.38751 11.2594C7.32457 11.3285 7.2482 11.384 7.16305 11.4226C7.07791 11.4612 6.98579 11.482 6.89233 11.4838C6.79887 11.4855 6.70604 11.4682 6.6195 11.4328C6.53297 11.3975 6.45456 11.3448 6.38907 11.2781L3.01595 7.86C2.88586 7.72733 2.81299 7.54893 2.81299 7.36312C2.81299 7.17732 2.88586 6.99892 3.01595 6.86625C3.07993 6.80097 3.15629 6.74911 3.24056 6.7137C3.32484 6.6783 3.41532 6.66006 3.50673 6.66006C3.59814 6.66006 3.68863 6.6783 3.7729 6.7137C3.85717 6.74911 3.93353 6.80097 3.99751 6.86625L6.85876 9.76594L11.9213 3.7425C11.9271 3.73525 11.9334 3.72837 11.94 3.72187Z"
          fill="white"
        />
      </Svg>
    </View>
  );

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        onChange(!active);
        setActive((prevValue) => !prevValue);
      }}
      hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
      style={style}
    >
      {active ? activeJSX : inactiveJSX}
    </TouchableOpacity>
  );
}

export default CheckBox;

import { View, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";

function Color({ color, active, setActiveColor, colorObject }) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => {
        setActiveColor(colorObject);
      }}
    >
      <View
        style={{
          width: 30,
          height: 30,
          backgroundColor: color,
          borderRadius: 15,
          aspectRatio: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {active && (
          <Svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M16.7161 5.21062C16.8056 5.11923 16.9125 5.04662 17.0305 4.99706C17.1485 4.94749 17.2752 4.92196 17.4032 4.92196C17.5311 4.92196 17.6578 4.94749 17.7758 4.99706C17.8938 5.04662 18.0007 5.11923 18.0903 5.21062C18.4656 5.58993 18.4709 6.20287 18.1034 6.58875L10.3426 15.7631C10.2545 15.8599 10.1475 15.9376 10.0283 15.9917C9.90912 16.0457 9.78016 16.0748 9.64931 16.0773C9.51847 16.0797 9.3885 16.0554 9.26735 16.0059C9.14621 15.9564 9.03644 15.8828 8.94475 15.7894L4.22238 11.004C4.04025 10.8183 3.93823 10.5685 3.93823 10.3084C3.93823 10.0482 4.04025 9.79848 4.22238 9.61275C4.31195 9.52135 4.41886 9.44875 4.53684 9.39918C4.65482 9.34961 4.7815 9.32408 4.90947 9.32408C5.03744 9.32408 5.16413 9.34961 5.28211 9.39918C5.40009 9.44875 5.50699 9.52135 5.59657 9.61275L9.60232 13.6723L16.6898 5.2395C16.698 5.22935 16.7067 5.21971 16.7161 5.21062Z"
              fill="white"
            />
          </Svg>
        )}
      </View>
    </TouchableOpacity>
  );
}

export default Color;

import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Icon = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="m7 10 5 5 5-5H7Z" fill="#181818" fillOpacity={0.6} />
  </Svg>
);

export default Icon;

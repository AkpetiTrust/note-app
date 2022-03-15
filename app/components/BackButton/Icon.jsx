import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Icon = (props) => (
  <Svg
    width={24}
    height={27}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M17.77 4.241 16 2.25 6 13.5l10 11.25 1.77-1.991L9.54 13.5l8.23-9.259Z"
      fill="#33CA7F"
    />
  </Svg>
);

export default Icon;

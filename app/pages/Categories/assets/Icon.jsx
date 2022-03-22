import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Icon = (props) => (
  <Svg
    width={60}
    height={60}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M55 27.5v15c0 10-2.5 12.5-12.5 12.5h-25C7.5 55 5 52.5 5 42.5v-25C5 7.5 7.5 5 17.5 5h3.75c3.75 0 4.575 1.1 6 3L31 13c.95 1.25 1.5 2 4 2h7.5c10 0 12.5 2.5 12.5 12.5Z"
      stroke="#DD8100"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <Path
      d="M20 5h22.5c5 0 7.5 2.5 7.5 7.5v3.45"
      stroke="#DD8100"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Icon;

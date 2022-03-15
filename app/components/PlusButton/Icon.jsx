import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Icon = (props) => (
  <Svg
    width={29}
    height={29}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M14.5 14.5H4.833m9.667 9.667V14.5v9.667Zm0-9.667V4.833 14.5Zm0 0h9.667H14.5Z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
);

export default Icon;

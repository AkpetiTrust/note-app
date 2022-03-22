import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Plus = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 12H8m4-4v4-4Zm0 4v4-4Zm0 0h4-4Z"
      stroke="#181818"
      strokeOpacity={0.6}
      strokeLinecap="round"
    />
    <Path
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      stroke="#181818"
      strokeOpacity={0.6}
    />
  </Svg>
);

export default Plus;

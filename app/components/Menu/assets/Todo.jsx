import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8.25 14.625h7.5M8.25 9.375h7.5M8.25 4.125h7.5M2.25 4.125l.75.75 2.25-2.25M2.25 9.375l.75.75 2.25-2.25M2.25 14.625l.75.75 2.25-2.25"
      stroke="#292D32"
      strokeOpacity={0.51}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgComponent;

import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    width={19}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M17.448 5.07 14.92 15.217a1.67 1.67 0 0 1-1.635 1.283H3.43c-1.133 0-1.943-1.11-1.605-2.197l3.157-10.14A1.688 1.688 0 0 1 6.587 2.97h9.226c.712 0 1.304.435 1.552 1.035.143.322.173.69.083 1.065Z"
      stroke="#292D32"
      strokeOpacity={0.51}
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <Path
      d="M13 16.5h3.585c.967 0 1.725-.818 1.657-1.785L17.5 4.5M8.26 4.785l.78-3.24M13.285 4.793l.705-3.255M6.775 9h6M6.025 12h6"
      stroke="#292D32"
      strokeOpacity={0.51}
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgComponent;

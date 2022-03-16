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
      d="M12.75 10.05v2.25c0 3-1.2 4.2-4.2 4.2H5.7c-3 0-4.2-1.2-4.2-4.2V9.45c0-3 1.2-4.2 4.2-4.2h2.25"
      stroke="#292D32"
      strokeOpacity={0.51}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.75 10.05h-2.4c-1.8 0-2.4-.6-2.4-2.4v-2.4l4.8 4.8ZM8.7 1.5h3M5.25 3.75A2.247 2.247 0 0 1 7.5 1.5h1.965M16.5 6v4.643a2.11 2.11 0 0 1-2.107 2.107M16.5 6h-2.25C12.562 6 12 5.437 12 3.75V1.5L16.5 6Z"
      stroke="#292D32"
      strokeOpacity={0.51}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgComponent;

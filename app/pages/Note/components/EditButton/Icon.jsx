import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Icon = (props) => (
  <Svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M14.625 9a.563.563 0 0 1 1.125 0v6.188a.562.562 0 0 1-.563.562H2.813a.563.563 0 0 1-.563-.563V2.813a.563.563 0 0 1 .563-.563H9a.563.563 0 1 1 0 1.125H3.375v11.25h11.25V9Z"
      fill="#fff"
    />
    <Path
      d="m8.26 9.743.929-.133 5.701-5.7a.562.562 0 1 0-.795-.796l-5.703 5.7-.132.929Zm7.426-7.425a1.686 1.686 0 0 1 0 2.387l-5.833 5.833a.562.562 0 0 1-.319.16l-1.856.265a.56.56 0 0 1-.637-.637l.266-1.856a.562.562 0 0 1 .158-.318L13.3 2.319a1.688 1.688 0 0 1 2.386 0v-.001Z"
      fill="#fff"
    />
  </Svg>
);

export default Icon;

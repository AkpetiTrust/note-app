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
      d="M1.5 16.5h15"
      stroke="#292D32"
      strokeOpacity={0.51}
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m2.213 16.5.037-9.023c0-.457.218-.892.578-1.177l5.25-4.087c.54-.42 1.297-.42 1.845 0l5.25 4.08c.367.285.577.72.577 1.184V16.5"
      stroke="#292D32"
      strokeOpacity={0.51}
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinejoin="round"
    />
    <Path
      d="M9.75 12.75h-1.5c-.622 0-1.125.502-1.125 1.125V16.5h3.75v-2.625c0-.623-.502-1.125-1.125-1.125ZM7.125 10.313h-1.5a.752.752 0 0 1-.75-.75V8.437c0-.412.338-.75.75-.75h1.5c.412 0 .75.338.75.75v1.126c0 .412-.338.75-.75.75ZM12.375 10.313h-1.5a.752.752 0 0 1-.75-.75V8.437c0-.412.338-.75.75-.75h1.5c.412 0 .75.338.75.75v1.126c0 .412-.338.75-.75.75Z"
      stroke="#292D32"
      strokeOpacity={0.51}
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinejoin="round"
    />
    <Path
      d="M14.25 5.25 14.227 3h-3.3"
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

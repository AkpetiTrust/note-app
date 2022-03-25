import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const Icon = (props) => (
  <Svg
    width={12}
    height={11}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)" stroke="#1F54A4" strokeWidth={0.917}>
      <Path
        d="M6 5.5H4.167M6 3.667V5.5 3.667ZM6 5.5v1.833V5.5Zm0 0h1.833H6Z"
        strokeLinecap="round"
      />
      <Path d="M6 10.083A4.583 4.583 0 1 0 6 .917a4.583 4.583 0 0 0 0 9.166Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(.5)" d="M0 0h11v11H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default Icon;

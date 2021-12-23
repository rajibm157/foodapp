import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

function SearchIcon(props) {
  return (
    <Svg
      width={21}
      height={21}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle
        cx={9.76639}
        cy={9.76657}
        r={8.98856}
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.018 16.485L19.542 20"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SearchIcon;

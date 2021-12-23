import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function MenuIcon(props) {
  return (
    <Svg
      width={17}
      height={15}
      viewBox="0 0 17 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path stroke="#000" d="M0 0.5L17 0.5" />
      <Path stroke="#000" d="M0 14.3462L8.5 14.3462" />
      <Path stroke="#000" d="M0 7.42285L13.0769 7.42285" />
    </Svg>
  );
}

export default MenuIcon;

import { Dimensions, PixelRatio, Platform } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;

const guidelineBaseWidth = 375;
const scale = WINDOW_WIDTH / guidelineBaseWidth;

export const scaleSize = (size) => scale * size;

export const scaleFontSize = (size) => size * PixelRatio.getFontScale(); //Used if want to chenge the font size according to the settings

//Used this if want to set the same size of font for all screens
export const scaleFont = (size) => {
  const newSize = scale * size;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

function dimensions(top, right = top, bottom = top, left = right, property) {
  let styles = {};

  styles[`${property}Top`] = top;
  styles[`${property}Right`] = right;
  styles[`${property}Bottom`] = bottom;
  styles[`${property}Left`] = left;

  return styles;
}

export function margin(top, right, bottom, left) {
  return dimensions(top, right, bottom, left, 'margin');
}

export function padding(top, right, bottom, left) {
  return dimensions(top, right, bottom, left, 'padding');
}

export function boxShadow(
  color,
  offset = { height: 2, width: 2 },
  radius = 8,
  opacity = 0.2
) {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  };
}

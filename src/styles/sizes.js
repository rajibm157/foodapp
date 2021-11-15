import { Dimensions } from 'react-native';
import { scaleSize, scaleFont } from './mixins';

//For Spacing
export const SCALE_45 = scaleSize(45);
export const SCALE_18 = scaleSize(18);
export const SCALE_16 = scaleSize(16);
export const SCALE_12 = scaleSize(12);
export const SCALE_10 = scaleSize(10);
export const SCALE_8 = scaleSize(8);

//For FONT SIZE
export const FONT_SIZE_24 = scaleFont(24);
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_12 = scaleFont(12);

//For LINE HEIGHT
export const LINE_HEIGHT_30 = scaleFont(30);
export const LINE_HEIGHT_24 = scaleFont(24);
export const LINE_HEIGHT_20 = scaleFont(20);
export const LINE_HEIGHT_16 = scaleFont(16);

// FONT WEIGHT
export const FONT_WEIGHT_REGULAR = '400';
export const FONT_WEIGHT_BOLD = '700';

export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;

import * as SIZES from './sizes';

// FONT FAMILY
export const Fonts = {
  FONT_FAMILY_BOLD: 'Sk-Modernist-Bold',
  FONT_FAMILY_REGULAR: 'Sk-Modernist-Regular',
  SUBFONT_FAMILY_BOLD: 'DMSans-Bold',
};

// HEADER 1 FONT STYLE
export const Header1 = {
  fontSize: SIZES.FONT_SIZE_24,
  fontWeight: SIZES.FONT_WEIGHT_BOLD,
  fontFamily: Fonts.SUBFONT_FAMILY_BOLD,
  fontStyle: 'normal',
  lineHeight: SIZES.LINE_HEIGHT_30,
  letterSpacing: -0.03,
};

// HEADER 2 FONT STYLE
export const Header2 = {
  fontSize: SIZES.FONT_SIZE_16,
  fontWeight: SIZES.FONT_WEIGHT_BOLD,
  fontFamily: Fonts.SUBFONT_FAMILY_BOLD,
  fontStyle: 'normal',
  lineHeight: SIZES.LINE_HEIGHT_20,
  letterSpacing: -0.03,
};

// BODY REGULAR FONT STYLE
export const BodyRegular = {
  fontSize: SIZES.FONT_SIZE_14,
  fontWeight: SIZES.FONT_WEIGHT_REGULAR,
  fontFamily: Fonts.FONT_FAMILY_REGULAR,
  fontStyle: 'normal',
  lineHeight: SIZES.LINE_HEIGHT_20,
};

// BUTTON FONT STYLE
export const Button = {
  fontSize: SIZES.FONT_SIZE_16,
  fontWeight: SIZES.FONT_WEIGHT_BOLD,
  fontFamily: Fonts.FONT_FAMILY_BOLD,
  fontStyle: 'normal',
  lineHeight: SIZES.LINE_HEIGHT_24,
  letterSpacing: -0.01,
};

// CAPTION FONT STYLE
export const Caption = {
  fontSize: SIZES.FONT_SIZE_12,
  fontWeight: SIZES.FONT_WEIGHT_REGULAR,
  fontFamily: Fonts.FONT_FAMILY_REGULAR,
  fontStyle: 'normal',
  lineHeight: SIZES.LINE_HEIGHT_16,
  letterSpacing: -0.03,
};

export default { Header1, Header2, BodyRegular, Button, Caption };

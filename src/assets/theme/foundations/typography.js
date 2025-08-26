import remCalc from "../tools/remCalc";

const typographyDefault = {
  fontStyle: "normal",
  fontWeight: 400,
  letterSpacing: 0,
};

const typography = {
  textStyles: {
    headline_alt: {
      ...typographyDefault,
      fontSize: { base: remCalc(24), md: remCalc(32) },
      fontWeight: 500,
      lineHeight: { base: remCalc(32), md: remCalc(44) },
      textTransform: "uppercase",
    },
    headline: {
      ...typographyDefault,
      fontSize: { base: remCalc(24), md: remCalc(32) },
      fontWeight: 500,
      lineHeight: { base: remCalc(32), md: remCalc(44) },
    },
    title: {
      ...typographyDefault,
      fontSize: { base: remCalc(18), md: remCalc(24) },
      fontWeight: 500,
      lineHeight: { base: remCalc(24), md: remCalc(32) },
    },
    subtitle: {
      ...typographyDefault,
      fontSize: remCalc(18),
      lineHeight: remCalc(24),
    },
    text: {
      ...typographyDefault,
      fontSize: { base: remCalc(14), md: remCalc(16) },
      lineHeight: remCalc(24),
    },
    caption: {
      ...typographyDefault,
      fontSize: remCalc(12),
      lineHeight: remCalc(18),
    },
  },
};
export default typography;

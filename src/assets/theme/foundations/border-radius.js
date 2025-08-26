import remCalc from "../tools/remCalc";

const borderRadius = {
  radii: {
    none: "0",
    sm: remCalc(2),
    base: remCalc(4),
    md: remCalc(6),
    lg: remCalc(8),
    xl: remCalc(12),
    "2xl": remCalc(16),
    "3xl": remCalc(9999),
  },
};

export default borderRadius;

import remCalc from "../tools/remCalc";

const breakpoints = {
  base: remCalc(0),
  sm: remCalc(375),
  md: remCalc(768),
  lg: remCalc(1024),
  xl: remCalc(1440),
  "2xl": remCalc(1920),
};
export default breakpoints;

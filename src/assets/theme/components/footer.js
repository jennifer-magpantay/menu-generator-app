import { mixins } from "../tools/mixins";
import remCalc from "../tools/remCalc";

const footer = {
  baseStyle: {
    container: {
      w: "100%",
      ...mixins.containerInlinePadding,
      py: "s",
      marginTop: "auto",
    },
    logoContainer: {
      w: { base: remCalc(150), lg: remCalc(200) },
      h: remCalc(44),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    caption: {
      w: "100%",
      display: "block",
      textAlign: "center",
      textStyle: "caption",
      fontSize: remCalc(14),
    },
  },
  sizes: {},
  variants: {},
  defaultProps: {},
};
export default footer;

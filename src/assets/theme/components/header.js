import { mixins } from "../tools/mixins";
import remCalc from "../tools/remCalc";

const header = {
  baseStyle: {
    container: {
      w: "100%",
      h: remCalc(60),
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "xs",
      ...mixins.containerInlinePadding,
    },
    logoContainer: {
      w: { base: remCalc(100), lg: remCalc(150) },
      h: remCalc(44),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  sizes: {},
  variants: {},
  defaultProps: {},
};
export default header;

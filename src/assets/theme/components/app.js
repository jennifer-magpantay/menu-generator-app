import { mixins } from "../tools/mixins";

export default {
  baseStyle: {
    container: {
      w: "100%",
      // h: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "xs",
      ...mixins.containerInlinePadding,
    },
    title: {
      w: "100%",
      display: "block",
      textAlign: "center",
      textStyle: "headline",
    },
    subTitle: {
      w: "100%",
      display: "block",
      textAlign: "center",
      textStyle: "subtitle",
    },
  },
  sizes: {},
  variants: {},
  defaultProps: {},
};

import { mixins } from "../tools/mixins";
import remCalc from "../tools/remCalc";

const form = {
  baseStyle: {
    container: {
      w: "100%",
      h: "fit-content",
      display: "flex",
      flexDirection: "column",
    },
    label: {
      mb: "xxxs",
      textStyle: "caption",
    },
    input: {
      w: "100%",
      minH: remCalc(44),
      bg: "black.50",
      border: "1px solid",
      borderColor: "black.200",
      borderRadius: "base",
      py: "xxs",
      px: "xxs",
      _focus: {
        borderColor: "blue.500",
        boxShadow: "0 0 0 1px blue.500",
      },
      textStyle: "text",
      ...mixins.focusVisible,
    },
    button: {
      w: "fit-content",
      minH: remCalc(44),
      px: "xs",
    },
  },
  sizes: {},
  variants: {},
  defaultProps: {},
};
export default form;

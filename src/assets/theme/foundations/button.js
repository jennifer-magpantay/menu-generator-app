import { mixins } from "../tools/mixins";
import remCalc from "../tools/remCalc";

const button = {
  Button: {
    baseStyle: {
      w: "max-content",
      h: remCalc(44),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      px: "xs",
      border: 1,
      borderStyle: "solid",
      borderColor: "transparent",
      borderRadius: "base",
      textAlign: "center",
      ...mixins.focusVisible,
      _hover: {
        cursor: "pointer",
      },
      _disabled: {
        opacity: 1,
        pointerEvents: "none",
      },
    },
    sizes: {},
    variants: {
      solid: {
        bg: "black.900",
        color: "white",
        _hover: {
          bg: "black.600",
        },
      },
      outline: {
        borderColor: "black.900",
        _hover: {
          borderColor: "black.600",
          color: "black.600",
        },
      },
      addDishCta: {
        position: "absolute",
        top: "s",
        right: "m",
        bg: "black.900",
        color: "white",
        _hover: {
          bg: "black.600",
        },
      },
    },
    defaultProps: {
      size: "none",
    },
  },
};

export default button;

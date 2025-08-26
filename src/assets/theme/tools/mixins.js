import remCalc from "./remCalc";

export const mixins = {
  containerInlinePadding: {
    paddingInline: { base: "xs", md: "m" },
  },

  option: {
    w: "fit-content",
    minH: remCalc(44),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    px: "xs",
    border: "1px solid",
    borderColor: "black.400",
    borderRadius: "3xl",
    "&[data-checked]": {
      bg: "black.900",
      color: "white",
      borderColor: "transparent",
      _hover: {
        bg: "black.900",
      },
    },
    _hover: {
      bg: "black.600",
      color: "white",
      borderColor: "transparent",
    },
  },

  focusVisible: {
    outline: "2px solid",
    outlineColor: "transparent",
    outlineOffset: "0px",
    transition: "all 0.3s ease-in-out",

    _focusVisible: {
      boxShadow: "none",
      outlineColor: "black.800",
      outlineOffset: "2px",
    },
  },
};

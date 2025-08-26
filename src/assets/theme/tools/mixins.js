import remCalc from "./remCalc";

const radio_option = {
  w: "fit-content",
  minH: remCalc(44),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  px: "xs",
  border: "1px solid",
  borderColor: "black.400",

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
};

export const mixins = {
  containerInlinePadding: {
    paddingInline: { base: "xs", md: "m" },
  },

  option: {
    ...radio_option,
    borderRadius: "3xl",
  },

  optionTemplate: {
    ...radio_option,
    borderRadius: "base",
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

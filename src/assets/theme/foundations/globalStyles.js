import remCalc from "../tools/remCalc";

const globalStyles = {
  "html, body": {
    backgroundColor: "surface.surface-white",
    color: "text.text-black",
    "*": {
      WebkitTapHighlightColor: "transparent",
    },
  },
  html: {
    overflowX: "hidden",
  },
  body: {
    w: "100%",
    minHeight: "100vh",
    overscrollBehavior: "none",
  },
  "*": {
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
  },
  "#root": {
    w: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    bg: "background.light",
  },
  ul: {
    margin: 0,
    padding: 0,
    listStyleType: "none",
  },
  ".no-scroll": {
    overflow: "hidden",
  },
  ".sr-only:not(:focus):not(:active)": {
    width: "01px",
    height: "01px",
    position: "absolute",
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  ".custom-scrollbar": {
    "::-webkit-scrollbar": {
      w: "1px",
    },
    "::-webkit-scrollbar-button": {
      display: "none",
    },
    "::-webkit-scrollbar-track": {
      boxShadow: "none",
      background: "border.border-medium-grey",
      margin: { base: remCalc(8), lg: remCalc(24) },
    },
    "::-webkit-scrollbar-thumb": {
      backgroundColor: "border.border-black",
      margin: { base: remCalc(8), lg: remCalc(24) },
    },
  },
  ".scrollbar-hidden": {
    /* Hide scrollbar for Chrome, Safari, and Opera */
    "::-webkit-scrollbar": {
      display: "none",
    },
    /* Hide scrollbar for IE and Edge */
    msOverflowStyle: "none",
    /* Hide scrollbar for Firefox */
    scrollbarWidth: "none", // para Firefox
  },
};
export default globalStyles;

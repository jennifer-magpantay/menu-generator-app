import remCalc from "../tools/remCalc";

const menuEditPreview = {
  baseStyle: {
    container: {
      w: { base: "100%", lg: "50%" },
      display: "flex",
      flexDirection: "column",
      gap: "xs",
      padding: "xs",
      mb: "xs",
    },
    container_preview: {
      w: "100%",
      h: "auto",
      position: "sticky",
      top: "s",
      p: { base: "m", md: "l" },
      display: "flex",
      flexDirection: "column",
      gap: "xs",
      bg: "white",
      border: "1px solid",
      borderColor: "black.500",
      borderRadius: "lg",
    },
    title: {
      display: { base: "block", md: "none" },
      color: "black.900",
    },
    menuTitle: {
      w: "100%",
      display: "block",
      color: "black.900",
      textAlign: "center",
      textStyle: "headline",
    },
    menuDate: {
      w: "100%",
      display: "block",
      color: "black.600",
      textAlign: "center",
      textStyle: "text",
    },
    menuCaption: {
      color: "black.600",
      textStyle: "text",
    },
    dishTitle: {
      color: "black.900",
      textStyle: "title",
    },
    dishDescription: {
      color: "black.600",
      textStyle: "subtitle",
    },
    dishFormContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "s",
      position: "relative",
      paddingX: "xs",
      paddingY: "s",
      marginTop: "xs",
      border: "1px solid",
      borderColor: "black.300",
      borderRadius: "md",
    },
    dishDeleteCta: {
      w: remCalc(44),
      h: remCalc(44),
      position: "absolute",
      top: "xxs",
      right: "xxxs",
      zIndex: 1,
    },
  },
  sizes: {},
  variants: {},
  defaultProps: {},
};

export default menuEditPreview;

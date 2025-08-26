import { tagAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tagAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "xxs",
    px: "xs",
    border: "1px solid",
    borderColor: "transparent",
    borderRadius: "3xl",
    color: "black.900",
  },
  label: {
    textStyle: "text",
  },
  closeButton: {},
});

const label = definePartsStyle({
  container: {
    borderColor: "red",
    bg: "pink",
  },
  label: { color: "red" },
});

const allergen = definePartsStyle({
  container: {
    borderColor: "pink",
    bg: "red",
  },
  label: { color: "white" },
});

const tag = defineMultiStyleConfig({
  baseStyle,
  variants: { label, allergen },
});
export default tag;

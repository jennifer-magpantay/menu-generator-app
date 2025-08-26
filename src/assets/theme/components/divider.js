import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const divider_default = {
  w: "100%",
  borderWidth: "1px",
  borderStyle: "solid",
  opacity: 1,
  my: "s",
};

const black = defineStyle({
  ...divider_default,
  borderColor: "black",
});

const grey = defineStyle({
  ...divider_default,
  borderColor: "black.200",
});

export const divider = defineStyleConfig({
  variants: { black, grey },
});

export default divider;

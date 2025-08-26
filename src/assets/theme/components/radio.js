import { radioAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { mixins } from "../tools/mixins";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(radioAnatomy.keys);

const baseStyle = definePartsStyle({
  control: { display: "none" },
  label: {},
  container: {
    ...mixins.option,
    ...mixins.focusVisible,
    span: { marginLeft: "0" },
  },
});

export const radio = defineMultiStyleConfig({ baseStyle });
export default radio;

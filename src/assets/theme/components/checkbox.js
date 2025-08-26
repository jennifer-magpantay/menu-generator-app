import { checkboxAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { mixins } from "../tools/mixins";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const baseStyle = definePartsStyle({
  control: {},
  icon: { display: "none" },
  container: {
    span: { marginLeft: "0" },
    borderRadius: "3xl",
    ...mixins.focusVisible,
  },
  label: {
    ...mixins.option,
  },
});

export const checkbox = defineMultiStyleConfig({ baseStyle });
export default checkbox;

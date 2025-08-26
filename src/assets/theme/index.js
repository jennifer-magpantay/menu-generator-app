import { Divider, extendTheme } from "@chakra-ui/react";
// Foundations
import breakpoints from "./foundations/breakpoints";
import borderRadius from "./foundations/border-radius";
import colors from "./foundations/color";
import spacing from "./foundations/spacing";
import globalStyles from "./foundations/globalStyles";
import typography from "./foundations/typography";
// Base
import button from "./foundations/button";
import checkbox from "./components/checkbox";
import divider from "./components/divider";
import radio from "./components/radio";
import tag from "./components/tag";

// Components
import app from "./components/app";
import fieldset from "./components/fieldset";
import form from "./components/form";
import header from "./components/header";
import footer from "./components/footer";
import optionsGroup from "./components/options-group";
import menuEditPreview from "./components/menu-edit-preview";

export const appTheme = {
  // Foundations
  breakpoints,
  ...borderRadius,
  ...colors,
  ...spacing,
  ...typography,
  // Global styles
  styles: {
    global: {
      ...globalStyles,
    },
  },

  // Components
  components: {
    App: app,
    ...button,
    Checkbox: checkbox,
    Divider: divider,
    Fieldset: fieldset,
    Form: form,
    Header: header,
    Footer: footer,
    Radio: radio,
    OptionsGroup: optionsGroup,
    MenuEditPreview: menuEditPreview,
    Tag: tag,
  },
};

export default extendTheme(appTheme);

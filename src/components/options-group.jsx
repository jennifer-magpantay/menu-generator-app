import React from "react";
import PropTypes from "prop-types";

import { Stack, useMultiStyleConfig } from "@chakra-ui/react";

const OptionsGroup = ({ children, variant }) => {
  const styles = useMultiStyleConfig("OptionsGroup", { variant });
  return <Stack {...styles.container}>{children}</Stack>;
};

export default OptionsGroup;

OptionsGroup.propTypes = {
  children: PropTypes.node.isRequired,
};
OptionsGroup.displayName = "OptionsGroup";

import React from "react";
import PropTypes from "prop-types";

import { Stack, useMultiStyleConfig } from "@chakra-ui/react";

const OptionsGroup = ({ children }) => {
  const styles = useMultiStyleConfig("OptionsGroup", {});
  return <Stack {...styles.container}>{children}</Stack>;
};

export default OptionsGroup;

OptionsGroup.propTypes = {
  children: PropTypes.node.isRequired,
};
OptionsGroup.displayName = "OptionsGroup";

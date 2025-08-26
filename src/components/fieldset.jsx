import React from "react";
import PropTypes from "prop-types";
import { Box, useMultiStyleConfig } from "@chakra-ui/react";
/**
 * Fieldset component for grouping form elements with a legend.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.legend - The legend text for the fieldset.
 * @param {React.ReactNode} props.children - The content inside the fieldset.
 * @returns {JSX.Element} The rendered fieldset component.
 */
const Fieldset = ({ legend, children }) => {
  const styles = useMultiStyleConfig("Fieldset");

  return (
    <Box {...styles.container}>
      <Box as="fieldset" {...styles.fieldContainer}>
        <Box as="legend" {...styles.legend}>
          {legend}
        </Box>
        {children}
      </Box>
    </Box>
  );
};

export default Fieldset;

Fieldset.propTypes = {
  legend: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
Fieldset.displayName = "Fieldset";

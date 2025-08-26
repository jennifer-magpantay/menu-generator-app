import React from "react";
import PropTypes from "prop-types";
import { Box, useMultiStyleConfig } from "@chakra-ui/react";

/**
 * Form component for wrapping form elements with consistent styles.
 *
 * @param {Object} props - Component properties.
 * @param {React.ReactNode} props.children - The content inside the form.
 * @returns {JSX.Element} The rendered form component.
 */
const Form = ({ children }) => {
  const styles = useMultiStyleConfig("Form");

  return (
    <Box as="form" {...styles.container}>
      {children}
    </Box>
  );
};

export default Form;

Form.propTypes = {
  children: PropTypes.node.isRequired,
};
Form.displayName = "Form";

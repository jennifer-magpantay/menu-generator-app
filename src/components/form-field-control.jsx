import React from "react";
import PropTypes from "prop-types";
import { FormControl, FormErrorMessage } from "@chakra-ui/react";

const FormFieldControl = ({ children, label }) => {
  return (
    <>
      <FormControl>
        {children}
        <FormErrorMessage>{`${label} is required.`}</FormErrorMessage>
      </FormControl>
    </>
  );
};

FormFieldControl.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};

export default FormFieldControl;
FormFieldControl.displayName = "FormFieldControl";

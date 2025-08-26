import React from "react";
import PropTypes from "prop-types";
import { FormLabel, Input, useMultiStyleConfig } from "@chakra-ui/react";
import FormFieldControl from "./form-field-control";

const FormInput = ({ label, name, value, onChange }) => {
  const styles = useMultiStyleConfig("Form", {});

  return (
    <FormFieldControl label={label}>
      <FormLabel htmlFor={name} {...styles.label}>
        {label}
      </FormLabel>
      <Input
        type="text"
        name={name}
        id={name}
        value={value}
        autoComplete="off"
        placeholder={`Enter ${label.toLowerCase()}`}
        isRequired
        {...styles.input}
        onChange={(e) => onChange(name, e.target.value)}
      />
    </FormFieldControl>
  );
};

export default FormInput;

FormInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
FormInput.displayName = "FormInput";

import React from "react";
import PropTypes from "prop-types";
import { FormLabel, Input, useMultiStyleConfig } from "@chakra-ui/react";
import FormFieldControl from "./form-field-control";

const FormDate = ({ label, name, value, onChange }) => {
  const styles = useMultiStyleConfig("Form", {});

  return (
    <FormFieldControl label={label}>
      <FormLabel htmlFor={name} {...styles.label}>
        {label}
      </FormLabel>
      <Input
        type="date"
        name={name}
        id={name}
        value={value}
        autoComplete="off"
        isRequired
        {...styles.input}
        onChange={(e) => onChange(name, e.target.value)}
      />
    </FormFieldControl>
  );
};

FormDate.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

FormDate.displayName = "FormDate";

export default FormDate;

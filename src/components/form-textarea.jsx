import React from "react";
import PropTypes from "prop-types";
import { FormLabel, Textarea, useMultiStyleConfig } from "@chakra-ui/react";
import FormFieldControl from "./form-field-control";

const FormTextarea = ({ label, name, value, onChange }) => {
  const styles = useMultiStyleConfig("Form", {});

  return (
    <FormFieldControl label={label}>
      <FormLabel htmlFor={name} {...styles.label}>
        {label}
      </FormLabel>
      <Textarea
        name={name}
        id={name}
        value={value}
        autoComplete="off"
        placeholder={`Enter ${label.toLowerCase()}`}
        rows={4}
        resize={"none"}
        isRequired
        {...styles.input}
        paddingTop="12px"
        paddingBottom="8px"
        onChange={(e) => onChange(name, e.target.value)}
      />
    </FormFieldControl>
  );
};

export default FormTextarea;

FormTextarea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
FormTextarea.displayName = "FormTextarea";

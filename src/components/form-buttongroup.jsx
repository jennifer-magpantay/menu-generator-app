import React from "react";
import PropTypes from "prop-types";
import { Button, useMultiStyleConfig } from "@chakra-ui/react";
import FormFieldControl from "./form-field-control";
import OptionsGroup from "./options-group";

const FormButtonGroup = ({ label, options, onClick }) => {
  const styles = useMultiStyleConfig("Form", {});

  return (
    <FormFieldControl label={label}>
      {options.length > 0 && (
        <OptionsGroup>
          {options.map(({ value, label }, index) => (
            <Button
              key={value}
              id={value}
              variant={index === 0 ? "solid" : "outline"}
              value={value}
              {...styles.button}
              onClick={onClick}
            >
              {label}
            </Button>
          ))}
        </OptionsGroup>
      )}
    </FormFieldControl>
  );
};

export default FormButtonGroup;

FormButtonGroup.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  onClick: PropTypes.func,
};
FormButtonGroup.displayName = "FormButtonGroup";

import PropTypes from "prop-types";
import {
  Text,
  CheckboxGroup,
  Checkbox,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import FormFieldControl from "./form-field-control";
import OptionsGroup from "./options-group";

const FormCheckboxGroup = ({ label, name, options, value, onChange }) => {
  const styles = useMultiStyleConfig("Form", {});

  return (
    <FormFieldControl label={label}>
      <Text {...styles.label}>{label}</Text>
      {options.length > 0 && (
        <CheckboxGroup
          name={name}
          value={value}
          onChange={(value) => onChange(name, value)}
        >
          <OptionsGroup>
            {options.map((option) => (
              <Checkbox
                key={option.value}
                id={option.value}
                aria-label={option.value}
                value={option.value}
              >
                {option.label}
              </Checkbox>
            ))}
          </OptionsGroup>
        </CheckboxGroup>
      )}
    </FormFieldControl>
  );
};
export default FormCheckboxGroup;
FormCheckboxGroup.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ),
  value: PropTypes.string,
  onChange: PropTypes.func,
};

FormCheckboxGroup.displayName = "FormCheckboxGroup";

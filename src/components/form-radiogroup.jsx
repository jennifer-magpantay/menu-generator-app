import PropTypes from "prop-types";
import { RadioGroup, Radio, FormHelperText } from "@chakra-ui/react";
import FormFieldControl from "./form-field-control";
import OptionsGroup from "./options-group";

const FormRadioGroup = ({ label, name, options, value, variant, onChange }) => {
  const helperTemplateText = () => {
    let helperText = "";
    switch (value) {
      case "classic":
        helperText = "Traditional serif typography with clean lines.";
        break;
      case "modern":
        helperText = "Clean, minimalist design with sans-serif fonts.";
        break;
      case "elegant":
        helperText = "Sophisticated fine dinning aesthetic with cursive fonts.";
        break;
      case "casual":
        helperText = "Friendly, approachable bistro style";
        break;
      case "vintage":
        helperText = "Rustic, old-fashioned charm.";
        break;
      default:
        helperText = "";
        break;
    }
    return helperText;
  };

  return (
    <FormFieldControl label={label}>
      {options.length > 0 && (
        <RadioGroup
          name={name}
          value={value}
          onChange={(value) => onChange(name, value)}
        >
          <OptionsGroup>
            {options.map((option) => (
              <Radio key={option.value} value={option.value} variant={variant}>
                {option.label}
              </Radio>
            ))}
          </OptionsGroup>
        </RadioGroup>
      )}
      <FormHelperText textStyle="caption" mt="xxs">
        {helperTemplateText()}
      </FormHelperText>
    </FormFieldControl>
  );
};

export default FormRadioGroup;

FormRadioGroup.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ),
  value: PropTypes.string,
  variant: PropTypes.string,
  onChange: PropTypes.func,
};
FormRadioGroup.displayName = "FormRadioGroup";

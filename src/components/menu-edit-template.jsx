import PropTypes from "prop-types";
import Fieldset from "./fieldset";
import FormRadioGroup from "./form-radiogroup";

const MenuEditTemplate = ({ formData, onChange }) => {
  const { menuTemplate } = formData;

  return (
    <Fieldset legend="Menu Template">
      <FormRadioGroup
        label="Menu Template"
        value={menuTemplate}
        name="menuTemplate"
        options={[
          { value: "classic", label: "Classic" },
          { value: "modern", label: "Modern" },
          { value: "elegant", label: "Elegant" },
          { value: "vintage", label: "Vintage" },
        ]}
        variant="templateOptions"
        onChange={(name, value) => onChange("menuTemplate", name, value)}
      />
    </Fieldset>
  );
};

export default MenuEditTemplate;

MenuEditTemplate.propTypes = {
  formData: PropTypes.shape({
    menuTemplate: PropTypes.string,
  }),
  onChange: PropTypes.func,
};

MenuEditTemplate.displayName = "MenuEditTemplate";

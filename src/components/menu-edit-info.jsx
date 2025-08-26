import PropTypes from "prop-types";
import Fieldset from "./fieldset";
import FormInput from "./form-input";
import FormDate from "./form-date";

const MenuEditInfo = ({ formData, onChange }) => {
  const { menuTitle, menuDate } = formData;

  return (
    <Fieldset legend="Menu Information">
      <FormInput
        label="Title"
        name="menuTitle"
        value={menuTitle}
        onChange={(name, value) => onChange("menuTitle", name, value)}
      />
      <FormDate
        label="Date"
        name="menuDate"
        value={menuDate}
        onChange={(name, value) => onChange("menuDate", name, value)}
      />
    </Fieldset>
  );
};

export default MenuEditInfo;

MenuEditInfo.propTypes = {
  formData: PropTypes.shape({
    menuTitle: PropTypes.string,
    menuDate: PropTypes.string,
  }),
  onChange: PropTypes.func,
};

MenuEditInfo.displayName = "MenuEditInfo";

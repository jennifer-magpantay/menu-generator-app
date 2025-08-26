import React from "react";
import PropTypes from "prop-types";
import Fieldset from "./fieldset";
import FormInput from "./form-input";
import FormDate from "./form-date";

const MenuEditInfo = ({ formData, onChange }) => {
  const { menuTitle, menuDate } = formData;
  return (
    <Fieldset legend="Menu Information">
      <FormInput
        label="Menu Title"
        name="menuTitle"
        value={menuTitle}
        onChange={onChange}
      />
      <FormDate
        label="Menu Date"
        name="menuDate"
        value={menuDate}
        onChange={onChange}
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

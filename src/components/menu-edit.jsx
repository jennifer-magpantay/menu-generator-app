import PropTypes from "prop-types";

import { Box, useMultiStyleConfig } from "@chakra-ui/react";
import Form from "./form";

import MenuEditInfo from "./menu-edit-info";
import MenuEditTemplate from "./menu-edit-template";
import MenuEditDishes from "./menu-edit-dishes";
import MenuEditCtas from "./menu-edit-ctas";

const MenuEdit = ({ formData, onChange }) => {
  const styles = useMultiStyleConfig("MenuEditPreview");
  return (
    <Box as="section" aria-labelledby="menu-edit-title" {...styles.container}>
      <Form>
        {/* menu info */}
        <MenuEditInfo formData={formData} onChange={onChange} />
        {/* menu template */}
        <MenuEditTemplate formData={formData} onChange={onChange} />
        {/* dishes */}
        <MenuEditDishes formData={formData} onChange={onChange} />
        {/* print / download menu */}
        <MenuEditCtas formData={formData} />
      </Form>
    </Box>
  );
};

export default MenuEdit;

MenuEdit.propTypes = {
  formData: PropTypes.shape({
    menuTitle: PropTypes.string,
    menuDate: PropTypes.string,
    menuTemplate: PropTypes.string,
    dishTitle: PropTypes.string,
    dishDescription: PropTypes.string,
    dietaryLabels: PropTypes.array,
    allergens: PropTypes.array,
  }),
  onChange: PropTypes.func,
};

MenuEdit.displayName = "MenuEdit";

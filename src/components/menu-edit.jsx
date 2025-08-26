import PropTypes from "prop-types";
import {
  Box,
  VisuallyHidden,
  Text,
  useMultiStyleConfig,
} from "@chakra-ui/react";
// Components
import Form from "./form";
import MenuEditInfo from "./menu-edit-info";
import MenuEditTemplate from "./menu-edit-template";
import MenuEditDishes from "./menu-edit-dishes";
import MenuEditCtas from "./menu-edit-ctas";

const MenuEdit = ({ data, onChange, addDish, removeDish }) => {
  const styles = useMultiStyleConfig("MenuEditPreview");

  return (
    <Box as="section" aria-labelledby="menu-edit-title" {...styles.container}>
      <VisuallyHidden as="h2" id="menu-edit-title">
        Menu form
      </VisuallyHidden>
      <Form>
        <MenuEditInfo formData={data} onChange={onChange} />
        <MenuEditTemplate formData={data} onChange={onChange} />
        <MenuEditDishes
          formData={data}
          onChange={onChange}
          addDish={addDish}
          removeDish={removeDish}
        />
        <MenuEditCtas formData={data} />
      </Form>
    </Box>
  );
};

export default MenuEdit;

MenuEdit.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
  addDish: PropTypes.func,
  removeDish: PropTypes.func,
};

MenuEdit.displayName = "MenuEdit";

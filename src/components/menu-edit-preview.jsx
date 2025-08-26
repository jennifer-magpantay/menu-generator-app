import { useReducer } from "react";
import { useBreakpointValue } from "@chakra-ui/react";
// Components
import MenuEdit from "./menu-edit";
import MenuPreview from "./menu-preview";
import MenuEditPreviewDesktop from "./menu-edit-preview-desktop";
import MenuEditPreviewMobile from "./menu-edit-preview-mobile";
// Reducer
import {
  ACTION_TYPES,
  formReducer,
  INITIAL_DISH_DATA,
} from "../utils/formReducer";

const MenuEditPreview = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const [formData, dispatch] = useReducer(formReducer, INITIAL_DISH_DATA);

  const handleChange = (id, name, value) => {
    switch (id) {
      case "menuTitle":
      case "menuDate":
      case "menuTemplate":
        dispatch({ type: ACTION_TYPES.UPDATE_INFO, payload: { name, value } });
        break;
      default:
        dispatch({
          type: ACTION_TYPES.UPDATE_DISH,
          payload: { id, name, value },
        });
        break;
    }
  };

  const handleAddDish = () => {
    console.log("add dish");
    dispatch({ type: ACTION_TYPES.ADD_DISH });
  };

  const handleRemoveDish = (id) => {
    dispatch({ type: ACTION_TYPES.REMOVE_DISH, payload: { id } });
  };

  const menuEdit = (
    <MenuEdit
      data={formData}
      onChange={handleChange}
      addDish={handleAddDish}
      removeDish={handleRemoveDish}
    />
  );
  const menuPreview = <MenuPreview data={formData} />;

  return isDesktop ? (
    <MenuEditPreviewDesktop menuEdit={menuEdit} menuPreview={menuPreview} />
  ) : (
    <MenuEditPreviewMobile menuEdit={menuEdit} menuPreview={menuPreview} />
  );
};

export default MenuEditPreview;

MenuEditPreview.displayName = "MenuEditPreview";

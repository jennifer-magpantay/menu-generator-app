import { useReducer } from "react";
import { useBreakpointValue } from "@chakra-ui/react";
import MenuEdit from "./menu-edit";
import MenuPreview from "./menu-preview";
import MenuEditPreviewDesktop from "./menu-edit-preview-desktop";
import MenuEditPreviewMobile from "./menu-edit-preview-mobile";

const INITIAL_FORM_DATA = {
  menuTitle: "Menu title",
  menuDate: new Date().toISOString().split("T")[0], // Default to today's date
  menuTemplate: "classic",
  dishTitle: "Dish title",
  dishDescription: "Dish description",
  labelOptions: [],
  allergenOptions: [],
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.name]: action.value };
    case "RESET_FORM":
      return INITIAL_FORM_DATA;
    case "ADD_DISH":
      return {
        ...state,
        dishes: [...(state.dishes || []), { title: "", description: "" }],
      };
    case "REMOVE_DISH":
      return {
        ...state,
        dishes: (state.dishes || []).filter(
          (_, index) => index !== action.index
        ),
      };
    default:
      return state;
  }
};

const MenuEditPreview = () => {
  const [formData, dispatch] = useReducer(formReducer, INITIAL_FORM_DATA);
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const handleChange = (name, value) => {
    dispatch({ type: "UPDATE_FIELD", name, value });
  };

  const menuEdit = <MenuEdit formData={formData} onChange={handleChange} />;
  const menuPreview = <MenuPreview data={formData} />;

  return isDesktop ? (
    <MenuEditPreviewDesktop menuEdit={menuEdit} menuPreview={menuPreview} />
  ) : (
    <MenuEditPreviewMobile menuEdit={menuEdit} menuPreview={menuPreview} />
  );
};

export default MenuEditPreview;

MenuEditPreview.displayName = "MenuEditPreview";

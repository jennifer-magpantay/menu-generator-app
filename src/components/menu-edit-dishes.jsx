import React from "react";
import PropTypes from "prop-types";
import { Box, Button, IconButton, useMultiStyleConfig } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import Fieldset from "./fieldset";
import FormInput from "./form-input";
import FormTextarea from "./form-textarea";
import FormCheckboxGroup from "./form-checkboxgroup";

const MenuEditDishes = ({ formData, onChange }) => {
  const { dishTitle, dishDescription, dietaryLabels, allergens } = formData;
  const styles = useMultiStyleConfig("MenuEditPreview");

  return (
    <Fieldset legend="Dishes">
      <Button variant="addDishCta">Add dish</Button>
      <Box {...styles.dishFormContainer}>
        <IconButton
          aria-label="Delete dish"
          icon={<DeleteIcon />}
          {...styles.dishDeleteCta}
        />
        <FormInput
          label="Dish Title"
          name="dishTitle"
          value={dishTitle}
          onChange={onChange}
        />
        <FormTextarea
          label="Dish Description"
          name="dishDescription"
          value={dishDescription}
          onChange={onChange}
        />
        <FormCheckboxGroup
          label="Dietary Labels"
          name="labelOptions"
          options={[
            { value: "Vegetarian", label: "Vegetarian" },
            { value: "Vegan", label: "Vegan" },
            { value: "Gluten-Free", label: "Gluten-Free" },
            { value: "Halal", label: "Halal" },
          ]}
          value={dietaryLabels}
          onChange={onChange}
        />
        <FormCheckboxGroup
          label="Allergens"
          name="allergenOptions"
          options={[
            { value: "Gluten", label: "Gluten" },
            { value: "Nuts", label: "Nuts" },
            { value: "Dairy", label: "Dairy" },
            { value: "Soy", label: "Soy" },
            { value: "Shellfish", label: "Shellfish" },
            { value: "Eggs", label: "Eggs" },
            { value: "Fish", label: "Fish" },
            { value: "Sesame", label: "Sesame" },
            { value: "Sulphites", label: "Sulphites" },
            { value: "Lupin", label: "Lupin" },
            { value: "Celery", label: "Celery" },
            { value: "Mustard", label: "Mustard" },
            { value: "Molluscs", label: "Molluscs" },
          ]}
          value={allergens}
          onChange={onChange}
        />
      </Box>
    </Fieldset>
  );
};

export default MenuEditDishes;

MenuEditDishes.propTypes = {
  formData: PropTypes.shape({
    dishTitle: PropTypes.string,
    dishDescription: PropTypes.string,
    dietaryLabels: PropTypes.arrayOf(PropTypes.string),
    allergens: PropTypes.arrayOf(PropTypes.string),
  }),
  onChange: PropTypes.func,
};

MenuEditDishes.displayName = "MenuEditDishes";

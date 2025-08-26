import React from "react";
import PropTypes from "prop-types";
import { Box, Button, IconButton, useMultiStyleConfig } from "@chakra-ui/react";
// Icons
import { DeleteIcon } from "@chakra-ui/icons";
// Components
import Fieldset from "./fieldset";
import FormInput from "./form-input";
import FormTextarea from "./form-textarea";
import FormCheckboxGroup from "./form-checkboxgroup";

const MenuEditDishes = ({ formData, onChange, addDish, removeDish }) => {
  const { dishes } = formData;
  const styles = useMultiStyleConfig("MenuEditPreview");

  return (
    <Fieldset legend="Dishes">
      <Button variant="addDishCta" onClick={addDish}>
        Add dish
      </Button>
      {dishes.map(
        (
          { id, dishTitle, dishDescription, dietaryLabels, allergens },
          index
        ) => (
          <Box key={id} id={id} {...styles.dishFormContainer}>
            <IconButton
              aria-label="Delete dish"
              icon={<DeleteIcon color={index === 0 ? "gray" : "black"} />}
              isDisabled={index === 0}
              {...styles.dishDeleteCta}
              onClick={() => removeDish(id)}
            />
            <FormInput
              label="Title"
              name="dishTitle"
              value={dishTitle}
              onChange={(name, value) => onChange(id, name, value)}
            />
            <FormTextarea
              label="Description"
              name="dishDescription"
              value={dishDescription}
              onChange={(name, value) => onChange(id, name, value)}
            />
            <FormCheckboxGroup
              label="Dietary Labels"
              name="labelOptions"
              options={[
                { value: "Vegetarian", label: "Vegetarian" },
                { value: "Vegan", label: "Vegan" },
                { value: "Gluten-Free", label: "Gluten-Free" },
                { value: "Lactose-Free", label: "Lactose-Free" },
                { value: "Halal", label: "Halal" },
              ]}
              value={dietaryLabels}
              onChange={(name, value) => onChange(id, name, value)}
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
              onChange={(name, value) => onChange(id, name, value)}
            />
          </Box>
        )
      )}
    </Fieldset>
  );
};

export default MenuEditDishes;

MenuEditDishes.propTypes = {
  formData: PropTypes.shape({
    dishes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        dishTitle: PropTypes.string,
        dishDescription: PropTypes.string,
        dietaryLabels: PropTypes.arrayOf(PropTypes.string),
        allergens: PropTypes.arrayOf(PropTypes.string),
      })
    ),
  }),
  onChange: PropTypes.func,
  addDish: PropTypes.func,
  removeDish: PropTypes.func,
};

MenuEditDishes.displayName = "MenuEditDishes";

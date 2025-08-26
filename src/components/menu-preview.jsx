import PropTypes from "prop-types";
import { Box, Divider, Text, useMultiStyleConfig } from "@chakra-ui/react";
import OptionTag from "./option-tag";
import OptionsGroup from "./options-group";

const MenuPreview = ({ data }) => {
  const styles = useMultiStyleConfig("MenuEditPreview");

  const {
    menuTitle,
    menuDate,
    dishTitle,
    dishDescription,
    labelOptions = [],
    allergenOptions = [],
  } = data;

  const enabledLabelOptions =
    labelOptions && labelOptions?.length > 0 ? true : false;
  const enabledAllergenOptions =
    allergenOptions && allergenOptions?.length > 0 ? true : false;

  if (!data || Object.keys(data).length === 0) return null;

  return (
    <Box
      as="section"
      aria-labelledby="menu-preview-title"
      {...styles.container}
    >
      <Box id="menu-preview" {...styles.container_preview}>
        <Text {...styles.menuTitle}>{menuTitle}</Text>
        {menuDate && <Text {...styles.menuDate}>{menuDate}</Text>}
        <Divider variant="grey" />
        <Text {...styles.dishTitle}>{dishTitle}</Text>
        <Text {...styles.dishDescription}>{dishDescription}</Text>
        {enabledLabelOptions && (
          <>
            <Divider variant="grey" />
            <Text {...styles.menuCaption}>Labels:</Text>
            <OptionsGroup>
              {labelOptions?.map((label) => (
                <OptionTag key={label} variant="label" label={label} />
              ))}
            </OptionsGroup>
          </>
        )}
        {enabledAllergenOptions && (
          <>
            <Divider variant="grey" />
            <Text {...styles.menuCaption}>It may contain:</Text>
            <OptionsGroup>
              {allergenOptions?.map((allergen) => (
                <OptionTag key={allergen} variant="allergen" label={allergen} />
              ))}
            </OptionsGroup>
          </>
        )}
      </Box>
    </Box>
  );
};

export default MenuPreview;

MenuPreview.propTypes = {
  data: PropTypes.shape({
    menuTitle: PropTypes.string,
    menuDate: PropTypes.string,
    dishTitle: PropTypes.string,
    dishDescription: PropTypes.string,
    dietaryLabels: PropTypes.arrayOf(PropTypes.string),
    allergens: PropTypes.arrayOf(PropTypes.string),
  }),
};

MenuPreview.displayName = "MenuPreview";

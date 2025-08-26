import PropTypes from "prop-types";
import {
  Box,
  Divider,
  Text,
  VisuallyHidden,
  useMultiStyleConfig,
} from "@chakra-ui/react";
// Components
import OptionTag from "./option-tag";
import OptionsGroup from "./options-group";

const MenuPreview = ({ data }) => {
  const { menuTitle, menuDate, dishes } = data;
  const styles = useMultiStyleConfig("MenuEditPreview");

  if (!data || Object.keys(data).length === 0) return null;

  return (
    <Box
      as="section"
      aria-labelledby="menu-preview-title"
      {...styles.container}
    >
      <VisuallyHidden as="h2" id="menu-preview-title">
        Menu Preview
      </VisuallyHidden>
      <Box id="menu-preview" {...styles.container_preview}>
        <Text {...styles.menuTitle}>{menuTitle}</Text>
        {menuDate && <Text {...styles.menuDate}>{menuDate}</Text>}
        <Divider variant="grey" />
        {dishes.map(
          (
            { dishTitle, dishDescription, labelOptions, allergenOptions },
            index
          ) => {
            const enabledLabelOptions = labelOptions && labelOptions.length > 0;
            const enabledAllergenOptions =
              allergenOptions && allergenOptions.length > 0;

            return (
              <Box key={index}>
                <Text {...styles.dishTitle}>{dishTitle}</Text>
                <Text {...styles.dishDescription}>{dishDescription}</Text>
                {enabledLabelOptions && (
                  <>
                    {/* <Divider variant="grey" /> */}
                    <Text {...styles.menuCaption}>Labels:</Text>
                    <OptionsGroup>
                      {labelOptions.map((label) => (
                        <OptionTag key={label} variant="label" label={label} />
                      ))}
                    </OptionsGroup>
                  </>
                )}
                {enabledAllergenOptions && (
                  <>
                    {/* <Divider variant="grey" /> */}
                    <Text {...styles.menuCaption}>It may contain:</Text>
                    <OptionsGroup>
                      {allergenOptions.map((allergen) => (
                        <OptionTag
                          key={allergen}
                          variant="allergen"
                          label={allergen}
                        />
                      ))}
                    </OptionsGroup>
                  </>
                )}
                {dishes.length - 1 !== index && (
                  <Divider variant="grey" mt="l" />
                )}
              </Box>
            );
          }
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
    dishes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        dishTitle: PropTypes.string,
        dishDescription: PropTypes.string,
        labelOptions: PropTypes.arrayOf(PropTypes.string),
        allergenOptions: PropTypes.arrayOf(PropTypes.string),
      })
    ),
  }),
};

MenuPreview.displayName = "MenuPreview";

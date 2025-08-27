import PropTypes from "prop-types";
import { Box, Image } from "@chakra-ui/react";

const AllergenIcon = ({ name, size = "medium" }) => {
  const imagePath = `/allergens/${name}.png`;

  const sizeMap = {
    small: 40,
    medium: 80,
    large: 120,
  };

  return (
    <Box w={`${sizeMap[size]}px`} h={`${sizeMap[size]}px`}>
      <Image src={imagePath} alt={name} />
    </Box>
  );
};

AllergenIcon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default AllergenIcon;

AllergenIcon.displayName = "AllergenIcon";

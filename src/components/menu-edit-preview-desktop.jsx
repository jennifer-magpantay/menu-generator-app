import PropTypes from "prop-types";

import { Flex } from "@chakra-ui/react";

const MenuEditPreviewDesktop = ({ menuEdit, menuPreview }) => {
  return (
    <Flex direction={{ base: "column", lg: "row" }} gap="xs">
      {menuEdit}
      {menuPreview}
    </Flex>
  );
};

MenuEditPreviewDesktop.propTypes = {
  menuEdit: PropTypes.node,
  menuPreview: PropTypes.node,
};

export default MenuEditPreviewDesktop;

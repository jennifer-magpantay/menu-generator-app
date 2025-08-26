import PropTypes from "prop-types";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const MenuEditPreviewMobile = ({ menuEdit, menuPreview }) => {
  return (
    <Tabs>
      <TabList>
        <Tab>Edit Menu</Tab>
        <Tab>Preview</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>{menuEdit}</TabPanel>
        <TabPanel>{menuPreview}</TabPanel>
      </TabPanels>
    </Tabs>
  );
};

MenuEditPreviewMobile.propTypes = {
  menuEdit: PropTypes.node,
  menuPreview: PropTypes.node,
};

export default MenuEditPreviewMobile;

MenuEditPreviewMobile.displayName = "MenuEditPreviewMobile";

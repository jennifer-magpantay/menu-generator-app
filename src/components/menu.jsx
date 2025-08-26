import { Flex } from "@chakra-ui/react";
import MenuForm from "./menu-edit";
import MenuView from "./menu-preview";

const Menu = () => {
  return (
    <Flex direction={{ base: "column", lg: "row" }} gap="xs">
      <MenuForm />
      <MenuView />
    </Flex>
  );
};

export default Menu;

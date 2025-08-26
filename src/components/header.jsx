import React from "react";
import { Box, Image, useMultiStyleConfig } from "@chakra-ui/react";
import logo from "../assets/logo.svg";

/**
 * Header component for the application.
 *
 * @returns {JSX.Element} The rendered header component.
 */
const Header = () => {
  const styles = useMultiStyleConfig("Header");
  return (
    <Box as="header" {...styles.container}>
      <Box {...styles.logoContainer}>
        <Image src={logo} alt="MenuGeerator" />
      </Box>
    </Box>
  );
};

export default Header;

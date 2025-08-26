import React from "react";
import {
  Box,
  Divider,
  Image,
  Text,
  useMultiStyleConfig,
} from "@chakra-ui/react";
// Assets
import logo from "../assets/logo.svg";

/** * Footer component for the application.
 * @returns {JSX.Element} The rendered footer component.
 */
const Footer = () => {
  const styles = useMultiStyleConfig("Footer");

  return (
    <Box as="footer" {...styles.container}>
      <Box {...styles.logoContainer}>
        <Image src={logo} alt="MenuGeerator" />
      </Box>
      <Divider orientation="horizontal" variant={"grey"} />
      <Text {...styles.caption}>Developed by Jennifer Magpantay with fun</Text>
    </Box>
  );
};

export default Footer;

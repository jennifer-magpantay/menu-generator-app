import { Box, Text, useMultiStyleConfig } from "@chakra-ui/react";

// Components
import Header from "./components/header.jsx";
import MenuEditPreview from "./components/menu-edit-preview.jsx";
import Footer from "./components/footer.jsx";

function App() {
  const styles = useMultiStyleConfig("App");

  return (
    <>
      <Header />
      <Box as="main" {...styles.container}>
        <Text as="h1" {...styles.title}>
          Menu Generator App
        </Text>
        <Text as="h2" {...styles.subTitle}>
          Create your own menu with ease
        </Text>
        <MenuEditPreview />
      </Box>
      <Footer />
    </>
  );
}

export default App;

App.displayName = "App";

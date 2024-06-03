// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import GamePortal from "./components/GamePortal";

const App = () => {
  return (
    <ChakraProvider>
      <GamePortal></GamePortal>
    </ChakraProvider>
  );
};

export default App;

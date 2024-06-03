import { Container, Flex } from "@chakra-ui/react";

import Navbar from "./Navbar";
import GameSidebar from "./GameSidebar";
import GameGrid from "./GameGrid";

const GamePortal = () => {
  return (
    <Container maxW="container.xl" p={0} marginTop={0}>
      <Navbar />
      <Flex h="100vh">
        <GameSidebar />
        <GameGrid />
      </Flex>
    </Container>
  );
};

export default GamePortal;

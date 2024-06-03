import { Container, Flex } from "@chakra-ui/react";

import Navbar from "./Navbar";
import GameSidebar from "./GameSidebar";
import GameGrid from "./GameGrid";
import { useState } from "react";

const GamePortal = () => {
  const [searchText, setSearchText] = useState("");
  const handleSearchTextChange = (input: string) => {
    setSearchText(input);
  };
  return (
    <Container maxW="container.xl" p={0} marginTop={0}>
      <Navbar onChange={handleSearchTextChange} />
      <Flex h="100vh">
        <GameSidebar />
        <GameGrid searchText={searchText} />
      </Flex>
    </Container>
  );
};

export default GamePortal;

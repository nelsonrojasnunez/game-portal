import { Container, Flex } from "@chakra-ui/react";

import Navbar from "./Navbar";
import GameSidebar from "./GameSidebar";
import GameGrid from "./GameGrid";
import { useState } from "react";

const GamePortal = () => {
  const [searchText, setSearchText] = useState("");
  const [platformFilter, setPlatformFilter] = useState(0);
  const [selectedGenre, setSelectedGenre] = useState("");

  const handleSearchTextChange = (input: string) => {
    setSearchText(input);
  };

  const handlePlatformFilterChange = (input: number) => {
    setPlatformFilter(input);
  };

  const handleGenreSelection = (genre: string) => {
    setSelectedGenre(genre);
  };

  return (
    <Container maxW="container.xl" p={0} marginTop={0}>
      <Navbar onChange={handleSearchTextChange} />
      <Flex h="100vh">
        <GameSidebar handleGenreSelection={handleGenreSelection} />
        <GameGrid
          searchText={searchText}
          platformFilter={platformFilter}
          genreFilter={selectedGenre}
          onPlatformFilterChange={handlePlatformFilterChange}
        />
      </Flex>
    </Container>
  );
};

export default GamePortal;

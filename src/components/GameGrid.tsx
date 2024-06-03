import usePlatforms from "../hooks/usePlatforms";
import useGames from "../hooks/useGames";
import {
  VStack,
  Flex,
  Select,
  Spacer,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import { Platform } from "../services/platforms-service";
import { Game } from "../services/games-service";
import GameCard from "./GameCard";

interface Props {
  searchText: string;
}

const GameGrid = ({ searchText }: Props) => {
  const { platforms } = usePlatforms();
  const { games } = useGames();
  const visibleGames: Game[] =
    games && searchText !== ""
      ? games.results.filter((game) => game.name.indexOf(searchText) !== -1)
      : games.results;

  return (
    <>
      <VStack w="full" h="full" p={10} alignItems="flex-start">
        <Text fontSize="3xl">Games List</Text>
        <Flex h="6rem">
          <VStack h="full" p={5} alignItems="flex-start" w="sm">
            <Select placeholder="Select platform">
              {platforms &&
                platforms.results.map((item: Platform) => (
                  <option key={"platform" + item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
            </Select>
          </VStack>
          <Spacer />
          <VStack h="full" p={5} alignItems="flex-start" w="sm" marginLeft={2}>
            <Select
              placeholder="Order by"
              onChange={(evt) => {
                console.log(evt.target.value);
              }}
            >
              <option value="relevance">Relevance</option>
              <option value="date-added">Date Added</option>
              <option value="name">Name</option>
              <option value="release-date">Release Date</option>
              <option value="popularity">Popularity</option>
              <option value="average-rating">Average Rating</option>
            </Select>
          </VStack>
        </Flex>

        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        >
          {visibleGames &&
            visibleGames.map((game: Game) => (
              <GameCard game={game} key={game.id} />
            ))}
        </SimpleGrid>
      </VStack>
    </>
  );
};

export default GameGrid;

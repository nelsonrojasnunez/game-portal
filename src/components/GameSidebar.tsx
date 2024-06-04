import useGenres from "../hooks/useGenres";

import { VStack, Link, Text } from "@chakra-ui/react";
import { Genre } from "../services/genres-service";

interface Props {
  handleGenreSelection: (genre: string) => void;
}

const GameSidebar = ({ handleGenreSelection }: Props) => {
  const { genres } = useGenres();

  return (
    <>
      <VStack h="full" p={10} alignItems="flex-start" w="sm">
        <Text fontSize="3xl">Genres</Text>

        {genres &&
          genres.results.map((item: Genre) => (
            <Link key={item.id} onClick={() => handleGenreSelection(item.slug)}>
              {item.name}
            </Link>
          ))}
      </VStack>
    </>
  );
};

export default GameSidebar;

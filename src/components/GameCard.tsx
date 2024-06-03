import {
  Card,
  CardBody,
  Stack,
  Heading,
  Flex,
  VStack,
  Badge,
  Text,
  Image,
  } from "@chakra-ui/react";
import { Game } from "../services/games-service";
import { PlatformGameItem } from "../services/platforms-service";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  console.log("^^^", game.platforms)
  return (
    <Card key={"game_" + game.id} maxH="xs">
      <CardBody>
        <Image src={game.background_image} alt={game.name} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{game.name}</Heading>
        </Stack>
        <Flex direction="row">
          \{" "}
          {game.platforms &&
            game.platforms.map((platform: PlatformGameItem) => (
              <Text fontSize="3xs" key={platform.platform.id}>{platform.platform.name}</Text>
            ))}
          <VStack alignItems="flex-end">
            <Badge>{game.metacritic}</Badge>
          </VStack>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default GameCard;

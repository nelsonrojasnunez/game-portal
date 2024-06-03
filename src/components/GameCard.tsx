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
  return (
    <Card key={"game_" + game.id} maxH="xs">
      <CardBody>
        <Image src={game.background_image} alt={game.name} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{game.name}</Heading>
        </Stack>
        <Flex direction="column">
          <VStack alignItems="flex-end">
            <Badge>{game.metacritic}</Badge>
          </VStack>
          <VStack alignItems="flex-start">
            {game.platforms &&
              game.platforms.map((platform: PlatformGameItem) => (
                <Text fontSize="2xs" key={platform.platform.id}>
                  {platform.platform.slug}
                </Text>
              ))}
          </VStack>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default GameCard;

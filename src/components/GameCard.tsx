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
  const getPlatforms = (platforms: PlatformGameItem[]) => {
    let platformList = "";
    platforms.map((platform: PlatformGameItem) => {
      platformList += platform.platform.slug + " ";
    });

    return platformList;
  };
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
            {game.platforms && (
              <Text fontSize="2xs" key={"platforms_" + game.id}>
                {getPlatforms(game.platforms)}
              </Text>
            )}
          </VStack>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default GameCard;

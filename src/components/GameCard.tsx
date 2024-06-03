import {
  Card,
  CardBody,
  Stack,
  Heading,
  Flex,
  VStack,
  Link,
  Badge,
  Image,
  Box,
} from "@chakra-ui/react";
import { Game, GamePlatforms } from "../services/games-service";

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
        <Flex direction="row">
          \{" "}
          {game.platforms &&
            game.platforms.map((platform: GamePlatforms) => (
              <Link key={platform.id}>{platform.name}</Link>
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

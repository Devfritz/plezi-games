import { Card, CardBody, CardHeader, Heading, Image } from "@chakra-ui/react";
import { Game } from "../../hooks/useGames";

interface PropGame {
  game: Game;
}
const GameCard = ({ game }: PropGame) => {
  return (
    <Card borderRadius={12} overflow="hidden">
      <Image src={game.background_image} objectFit="cover" />

      <CardBody>
        <Heading as="h3" size="md">
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;

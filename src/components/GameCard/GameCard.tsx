import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../../hooks/useGames";
import getCroppedImageUrl from "../../services/image-url";
import ListPlatFormIcon from "../ListPlatformIcon/ListPlatFormIcon";
import MetaCritic from "../TagScore/MetaCritic";

interface PropGame {
  game: Game;
}

const GameCard = ({ game }: PropGame) => {
  return (
    <Card borderRadius={12} overflow="hidden">
      <Image
        src={getCroppedImageUrl(game.background_image)}
        objectFit="cover"
      />

      <CardBody>
        <Heading as="h3" size="md">
          {game.name}
        </Heading>
        <HStack my={5} justifyContent="space-between">
          <ListPlatFormIcon
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <MetaCritic metacritic={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;

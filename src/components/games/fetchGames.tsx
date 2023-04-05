import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import { Genres } from "../../hooks/useGenres";
import GameCard from "../GameCard/GameCard";

interface Props {
  selectGenre: Genres | null;
}

const GamesList = ({ selectGenre }: Props) => {
  const { data, errMessage } = useGames(selectGenre);
  return (
    <>
      {errMessage && <Text color="red.500">{errMessage}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10} padding={10}>
        {data.map((res) => (
          <GameCard key={res.id} game={res} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesList;

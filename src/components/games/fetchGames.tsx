import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import { Genres } from "../../hooks/useGenres";
import { ListPlatform } from "../../hooks/usePlatforms";
import GameCard from "../GameCard/GameCard";

interface Props {
  selectGenre: Genres | null;
  selectedPlatform: ListPlatform | null;
  selectedSort: string;
}

const GamesList = ({ selectGenre, selectedPlatform, selectedSort }: Props) => {
  const { data, errMessage } = useGames(
    selectGenre,
    selectedPlatform,
    selectedSort
  );
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

import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameCard from "../GameCard/GameCard";

const GamesList = () => {
  const { resultsListGames, errMessage } = useGames();

  return (
    <>
      {errMessage && <Text color="red.500">{errMessage}</Text>}

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10} padding={10}>
        {resultsListGames.map((res) => (
          <GameCard key={res.id} game={res} />
          //   <li key={res.id}>{res.name}</li>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesList;

import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameCard from "../GameCard/GameCard";

const GamesList = () => {
  const { data, errMessage } = useGames();
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

import { Divider, Text, VStack } from "@chakra-ui/react";
import useGenres from "../../hooks/useGenres";

const GenresList = () => {
  const { data, errMessage } = useGenres();

  return (
    <>
      {errMessage && <Text color="red.500">{errMessage}</Text>}
      <VStack mt={10} ml={5}>
        {data.map((genre) => (
          <>
            <Text>{genre.name}</Text>
            <Divider />
          </>
        ))}
      </VStack>
    </>
  );
};

export default GenresList;

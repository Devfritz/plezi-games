import { HStack, Text, Image, Spinner } from "@chakra-ui/react";
import useGenres from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";

const GenresList = () => {
  const { data, errMessage, loading } = useGenres();

  if (loading) return <Spinner />;
  return (
    <>
      {errMessage && <Text color="red.500">{errMessage}</Text>}

      {data.map((genre) => (
        <>
          <HStack justifyContent="start" paddingX={2} mt={5}>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius="10px"
            />
            <Text fontWeight="600">{genre.name}</Text>
          </HStack>
        </>
      ))}
    </>
  );
};

export default GenresList;

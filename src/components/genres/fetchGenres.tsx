import { HStack, Text, Image, Spinner, List, Button } from "@chakra-ui/react";
import useGenres, { Genres } from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";

interface Props {
  onSelectGenre: (genre: Genres) => void;
}

const GenresList = ({ onSelectGenre }: Props) => {
  const { data, errMessage, loading } = useGenres();

  if (loading) return <Spinner />;
  if (errMessage) return <Text color="red.500">{errMessage}</Text>;
  return (
    <List>
      {data.map((genre) => (
        <HStack key={genre.id} justifyContent="start" paddingX={2} mt={5}>
          <Image
            src={getCroppedImageUrl(genre.image_background)}
            boxSize="32px"
            borderRadius="10px"
          />
          <Button
            variant="link"
            fontWeight="600"
            onClick={() => onSelectGenre(genre)}
          >
            {genre.name}
          </Button>
        </HStack>
      ))}
    </List>
  );
};

export default GenresList;

import { Tag } from "@chakra-ui/react";

interface Props {
  metacritic: number;
}

const MetaCritic = ({ metacritic }: Props) => {
  return (
    <Tag variant="solid" size="md" colorScheme="green">
      {metacritic}
    </Tag>
  );
};

export default MetaCritic;

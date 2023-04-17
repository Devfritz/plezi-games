import { Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GamesList from "./components/games/fetchGames";
import GenresList from "./components/genres/fetchGenres";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";
import PlatformSelector from "./components/Platform Selector/PlatformSelector";
import { ListPlatform } from "./hooks/usePlatforms";
import SortSelector from "./components/Sort Selector/SortSelector";
function App() {
  // select genre
  const [selectGenre, setSelectGenre] = useState<Genres | null>(null);
  const [selectPlatform, setSelectPlatform] = useState<ListPlatform | null>(
    null
  );
  const [selectSort, setSelectSort] = useState<string>();

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        {/* Navbar */}
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenresList onSelectGenre={(genre) => setSelectGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Flex gap="2" marginLeft={10}>
          <PlatformSelector
            onSelectedPLatform={(platform) => setSelectPlatform(platform)}
            selectedPlatform={selectPlatform}
          />
          <SortSelector
            selectorSortOrder={selectSort as string}
            onSelectorSort={(sort) => setSelectSort(sort)}
          />
        </Flex>

        <GamesList
          selectGenre={selectGenre}
          selectedPlatform={selectPlatform}
          selectedSort={selectSort!}
        />
      </GridItem>
    </Grid>
  );
}

export default App;

import { Grid, GridItem, Show } from "@chakra-ui/react";
import GamesList from "./components/games/fetchGames";
import GenresList from "./components/genres/fetchGenres";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";
import PlatformSelector from "./components/Platform Selector/PlatformSelector";
import { ListPlatform } from "./hooks/usePlatforms";
function App() {
  // select genre
  const [selectGenre, setSelectGenre] = useState<Genres | null>(null);
  const [selectPlatform, setSelectPlatform] = useState<ListPlatform | null>(
    null
  );

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
        <PlatformSelector
          onSelectedPLatform={(platform) => setSelectPlatform(platform)}
          selectedPlatform={selectPlatform}
        />
        <GamesList
          selectGenre={selectGenre}
          selectedPlatform={selectPlatform}
        />
      </GridItem>
    </Grid>
  );
}

export default App;

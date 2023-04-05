import { Grid, GridItem, Show } from "@chakra-ui/react";
import GamesList from "./components/games/fetchGames";
import GenresList from "./components/genres/fetchGenres";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";
function App() {
  // select genre
  const [selectGenre, setSelectGenre] = useState<Genres | null>(null);

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
        <GamesList selectGenre={selectGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;

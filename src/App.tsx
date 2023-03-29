import { Grid, GridItem, Show } from "@chakra-ui/react";
import GamesList from "./components/games/fetchGames";
import Navbar from "./components/Navbar";
function App() {
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
        <GridItem area="aside">Aside</GridItem>
      </Show>

      <GridItem area="main">
        <GamesList />
      </GridItem>
    </Grid>
  );
}

export default App;

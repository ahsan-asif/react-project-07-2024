import {
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  HStack,
  Show,
} from "@chakra-ui/react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { Genres } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genres | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  // const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);
  // const [selectedPlatform, setSeletedPlatform] = useState<Platform | null>(
  //   null
  // );

  //use query object instead of above
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, // for small devices
        lg: `"nav nav" "aside main"`, // above 1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      {/* //only showing above large screen */}
      <Show above="lg">
        <GridItem area="aside" paddingX={5} width="200px">
          <GenresList
            selectedGenre={gameQuery.genre}
            onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack spacing={5} paddingLeft={2} marginBottom={2}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectedPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector
            onSortSelector={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
            sortOrder={gameQuery.sortOrder}
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;

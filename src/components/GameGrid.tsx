import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props {
  // selectedGenre: Genres | null;
  // selectedPlatform: Platform | null;

  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  // calling custom hook
  const { data, error, isLoading } = useGames(gameQuery);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div>
      {error && <p>{error}</p>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={3}
        padding="10px"
      >
        {isLoading &&
          skeleton.map((single) => (
            <GameCardContainer key={single}>
              {" "}
              <GameCardSkeleton />{" "}
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;

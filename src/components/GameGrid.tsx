import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const GameGrid = () => {
  interface Game {
    id: number;
    name: string;
  }

  interface FetchGameResponse {
    count: number;
    results: Game[];
  }

  const [games, setGames] = useState<Game[]>([]);

  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGameResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameGrid;

import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import gamesService, { GameResult } from "../services/games-service";

const useGames = () => {
  const [games, setGames] = useState<GameResult>();
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = gamesService.getAll<GameResult>();
    request
      .then((res) => {
        setGames(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  return { games, error, isLoading, setGames, setError };
}

export default useGames;
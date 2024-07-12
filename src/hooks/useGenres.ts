import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genres {
  id: number;
  name: string;
}

interface FetchGenreResponse {
  count: number;
  results: Genres[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genres[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Handling request cancellation
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get<FetchGenreResponse>("/genres", {
        signal: controller.signal,
      })
      .then((res) => {
        setGenres(res.data.results);
        console.log(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    //return cancelled object
    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;

import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import genresService, { GenreResult } from "../services/genres-service";

const useGenres = () => {
  const [genres, setGenres] = useState<GenreResult>();
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = genresService.getAll<GenreResult>();
    request
      .then((res) => {
        setGenres(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  return { genres, error, isLoading, setGenres, setError };
}

export default useGenres;
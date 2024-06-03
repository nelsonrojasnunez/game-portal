import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import platformsService, { PlatformResult } from "../services/platforms-service";

const useGenres = () => {
  const [platforms, setPlatforms] = useState<PlatformResult>();
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = platformsService.getAll<PlatformResult>();
    request
      .then((res) => {
        setPlatforms(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  return { platforms, error, isLoading, setPlatforms, setError };
}

export default useGenres;
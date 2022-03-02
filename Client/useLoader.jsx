import { useEffect, useState } from "react";

/// Custom hook that can be used in React apps
export function useLoader(loader) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    setError(undefined);
    setLoading(true);
    try {
      setData(await loader());
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);
  return { loading, data, error };
}

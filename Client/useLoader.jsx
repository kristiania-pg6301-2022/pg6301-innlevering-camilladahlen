import { useEffect, useState } from "react";

/// Custom hook that can be used in React apps
export function useLoader(loader, deps) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    setLoading(true);
    setData(undefined);
    setError(undefined);
    try {
      setData(await loader());
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, deps);
  return { loading, data, error };
}

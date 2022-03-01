import { useEffect, useState } from "react";

/// Custom hook that can be used in React apps
export function useLoader(loadFn) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState();

  async function reload() {
    setError(undefined);
    setLoading(true);
    try {
      setData(await loadFn());
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(reload, []);
  return { reload, loading, data, error };
}

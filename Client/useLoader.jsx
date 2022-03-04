import { useEffect, useState } from "react";

/// Hook for loading data. It will call a loader function (for example a fetch call) for you
/// and set the data property when the data is loaded. If the data wasn't loaded successfully,
/// the error property is set. You can also feed it some dependencies. This ensures that the
/// data is reloaded when the dependencies change
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

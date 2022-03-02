class HttpError extends Error {
  constructor(status, statusText) {
    super(statusText);
  }
}

/// Function for retrieving JSON data from a url. Throws an error if response code isn't 200
export async function fetchJSON(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new HttpError(res.status, res.statusText);
  }
  return await res.json();
}

/// Function for posting JSON data to a url. Throws an error if response code isn't 200.
/// Also returns the response message, which you can then call .json() or .text() on,
/// depending upon what the server spits back
export async function submitJSON(url, method, payload) {
  const res = await fetch(url, {
    method: method,
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    throw new HttpError(res.status, res.statusText);
  }
  return res;
}

const API =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://127.0.0.1:8000";

export const getSafetyScore = async (
  lat,
  lng
) => {
  const res = await fetch(
    `${API}/safety/score`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        latitude: lat,
        longitude: lng,
        hour: new Date().getHours(),
      }),
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch safety score");
  }
  return await res.json();
};
const BASE_URL = `${import.meta.env.VITE_API_URL}/api/domains`;

export async function fetchDomains() {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Failed to fetch Domain");
  return res.json();
}

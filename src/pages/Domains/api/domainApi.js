const BASE_URL = `${import.meta.env.VITE_API_URL}/api/domains`;

export async function fetchDomains({ page, limit, niche }) {
  const params = new URLSearchParams({
    page,
    limit,
    ...(niche && { niche }),
  });

  const res = await fetch(`${BASE_URL}?${params.toString()}`);
  if (!res.ok) throw new Error("Failed to fetch domains");
  return res.json();
}

export async function createDomain(domain) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(domain),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Domain already exists");
  }

  return res.json();
}

export async function updateDomain(domain) {
  const res = await fetch(`${BASE_URL}/${domain.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(domain),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Update failed");
  }

  return res.json();
}

export async function deleteDomain(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Failed to delete domain");
}

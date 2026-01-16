const BASE_URL = `${import.meta.env.VITE_API_URL}/api/contacts`;

export async function fetchContacts({
  page,
  limit,
  search,
  sortBy,
  sortOrder,
}) {
  const params = new URLSearchParams({
    page,
    limit,
    ...(search && { search }),
    ...(sortBy && { sortBy }),
    ...(sortOrder && { sortOrder }),
  });

  const res = await fetch(`${BASE_URL}?${params.toString()}`);
  if (!res.ok) throw new Error("Failed to fetch contacts");
  return res.json(); // { data, total }
}

export async function createContact(contact) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contact),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Create failed");
  }
  return res.json();
}

export async function updateContact(contact) {
  const res = await fetch(`${BASE_URL}/${contact.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contact),
  });

  if (!res.ok) throw new Error("Update failed");
  return res.json();
}

export async function anonymizeContact(id) {
  const res = await fetch(`${BASE_URL}/${id}/anonymize`, {
    method: "PATCH",
  });
  if (!res.ok) throw new Error("Anonymization failed");
}

export async function deleteContact(id) {
  const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Delete failed");
}

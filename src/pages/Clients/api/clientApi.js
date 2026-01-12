const BASE_URL = `${import.meta.env.VITE_API_URL}/api`;

export async function createClient(client) {
  const res = await fetch(`${BASE_URL}/clients`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(client),
  });
  return res.json();
}

export async function updateClient(client) {
  const res = await fetch(`${BASE_URL}/clients/${client.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(client),
  });
  return res.json();
}

export async function fetchClients() {
  const res = await fetch(`${BASE_URL}/clients`);

  if (!res.ok) throw new Error("Failed to fetch clients");
  return res.json();
}

export async function fetchClientOrders(clientId) {
  const res = await fetch(`${BASE_URL}/client-orders?clientId=${clientId}`);

  if (!res.ok) throw new Error("Failed to fetch client orders");
  return res.json();
}

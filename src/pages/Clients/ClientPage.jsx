import { useEffect, useState } from "react";
import ClientErrorBoundary from "./ClientErrorBoundary";
// import { ClientProvider } from "./ClientContext";
import ClientList from "./Components/ClientList";
import { fetchClients, createClient, updateClient } from "./api/clientApi";
import ClientForm from "./Components/ClientForm";
import "./Client.css";

function ClientPage() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedClient, setSelectedClient] = useState(null);

  useEffect(() => {
    loadingClients();
  }, []);

  async function loadingClients() {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchClients();
      setClients(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function addClient(client) {
    const saved = await createClient(client);
    setClients((prev) => [...prev, saved]);
  }

  async function updateClientHandler(client) {
    const updated = await updateClient(client);
    setClients((prev) => prev.map((c) => (c.id === updated.id ? updated : c)));
    setSelectedClient(null);
  }

  return (
    <ClientErrorBoundary>
      <h1>Clients</h1>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      <ClientForm
        onAdd={addClient}
        onUpdate={updateClientHandler}
        selectedClient={selectedClient}
      />
      <ClientList clients={clients} selectedClient={setSelectedClient} />
    </ClientErrorBoundary>
  );
}

export default ClientPage;

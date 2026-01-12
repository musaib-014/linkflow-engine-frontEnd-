import ClientCard from "./ClientCard";

function ClientList({ clients, selectedClient }) {
  return (
    <div className="client-grid">
      {clients.map((client) => {
        <ClientCard
          key={client.id}
          client={client}
          setSelectedClient={selectedClient}
        />;
      })}
    </div>
  );
}

export default ClientList;

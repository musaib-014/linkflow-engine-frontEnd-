import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ClientQuickView from "./ClientQuickView";

function ClientCard({ client, setSelectedClient }) {
  const [showQuickView, setShowQuickView] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="client-card">
      <h3>{client.clientName}</h3>
      <p>{client.contactEmail}</p>

      <button onClick={() => setShowQuickView((v) => !v)}>Quick View</button>
      <button onClick={() => setSelectedClient(client)}>Edit</button>
      <button onClick={() => navigate(`/clientorders`)}>View Orders</button>

      {showQuickView && <ClientQuickView clientId={client.id} />}
    </div>
  );
}

export default ClientCard;

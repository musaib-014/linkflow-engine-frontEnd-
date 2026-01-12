import { useParams } from "react-router-dom";

function ClientOrdersPage() {
  const { clientId } = useParams();

  return (
    <div>
      <h1>Client Orders</h1>
      <p>Client ID: {clientId}</p>
    </div>
  );
}

export default ClientOrdersPage;

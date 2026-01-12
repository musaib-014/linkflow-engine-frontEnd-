import { useEffect, useState } from "react";
import { fetchClientOrders } from "../api/clientApi";

function ClientQuickView({ clientId }) {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadOrders();
  }, [clientId]);

  async function loadOrders() {
    try {
      setLoading(true);
      const orders = await fetchClientOrders(clientId);
      const activeOrders = orders.filter((o) => o.status === "active");
      setCount(activeOrders.length);
    } catch {
      setCount(0);
    } finally {
      setLoading(flase);
    }
  }

  if (loading) return <p>Loading orders...</p>;

  return <p>Active Orders: {count}</p>;
}

export default ClientQuickView;

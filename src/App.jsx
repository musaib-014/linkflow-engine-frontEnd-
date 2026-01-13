import { Routes, Route } from "react-router-dom";
import Personas from "./pages/Persona";
import ClientPage from "./pages/Clients/ClientPage";
import ClientOrdersPage from "./pages/ClientOrders/ClientOrdersPage";
import DomainPage from "./pages/Domains/DomainPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/personas" element={<Personas />} />
        <Route path="/clients" element={<ClientPage />} />
        <Route path="/clientorders/" element={<ClientOrdersPage />} />
        <Route path="/domains/:domainId/metrics" element={<DomainPage />} />
      </Routes>
    </>
  );
}

export default App;

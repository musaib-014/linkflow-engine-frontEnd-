import { Routes, Route } from "react-router-dom";
import Personas from "./pages/Persona";
import ClientPage from "./pages/Clients/ClientPage";
import ClientOrdersPage from "./pages/ClientOrders/ClientOrdersPage";
import DomainPage from "./pages/Domains/DomainPage";
import ContactPage from "./pages/Contacts/ContactPage";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<h1>This is the UI part of LinkFlow-Engine</h1>}
        />
        <Route path="/personas" element={<Personas />} />
        <Route path="/clients" element={<ClientPage />} />
        <Route path="/clientorders/" element={<ClientOrdersPage />} />
        <Route path="/domains" element={<DomainPage />} />
        <Route path="/contacts" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;

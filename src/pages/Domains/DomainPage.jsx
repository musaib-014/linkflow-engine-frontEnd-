import { useEffect, useState } from "react";
import DomainErrorBoundary from "./DomainErrorBoundary";
import DomainTable from "./components/DomainTable";
import { fetchDomains } from "./api/domainApi";
import "./Domains.css";

function DomainPage() {
  const [domains, setDomains] = useState([]);
  const [nicheFilter, setNicheFilter] = useState("");

  useEffect(() => {
    loadDomains();
  }, []);

  const filterDomains = nicheFilter
    ? domains.filter((d) => d.niche.includes(nicheFilter))
    : domains;

  return (
    <DomainErrorBoundary>
      <h1>Domains</h1>

      <DomainTable
        domains={filterDomains}
        nicheFilter={nicheFilter}
        setNicheFilter={setNicheFilter}
      />
    </DomainErrorBoundary>
  );
}

export default DomainPage;

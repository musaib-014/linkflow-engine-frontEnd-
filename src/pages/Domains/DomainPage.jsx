import { useEffect, useState } from "react";
import DomainErrorBoundary from "./DomainErrorBoundary";
import DomainForm from "./components/DomainForm";
import DomainTable from "./components/DomainTable";
import {
  fetchDomains,
  createDomain,
  updateDomain,
  deleteDomain,
} from "./api/domainApi";
import "./Domains.css";

const PAGE_SIZE = 5;

function DomainPage() {
  const [domains, setDomains] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [nicheFilter, setNicheFilter] = useState("");
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadDomains();
  }, [page, nicheFilter]);

  async function loadDomains() {
    try {
      setError(null);
      const res = await fetchDomains({
        page,
        limit: PAGE_SIZE,
        niche: nicheFilter,
      });
      setDomains(res.data);
      setTotal(res.total);
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleAdd(domain) {
    try {
      const saved = await createDomain(domain);
      setDomains((prev) => [saved, ...prev]);
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleUpdate(domain) {
    try {
      const updated = await updateDomain(domain);
      setDomains((prev) =>
        prev.map((d) => (d.id === updated.id ? updated : d))
      );
      setSelectedDomain(null);
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(id) {
    if (!window.confirm("Delete this domain?")) return;
    await deleteDomain(id);
    setDomains((prev) => prev.filter((d) => d.id !== id));
  }

  return (
    <DomainErrorBoundary>
      <h1>Domains</h1>

      {error && <p className="error">{error}</p>}

      <DomainForm
        onAdd={handleAdd}
        onUpdate={handleUpdate}
        selectedDomain={selectedDomain}
      />

      <DomainTable
        domains={domains}
        onEdit={setSelectedDomain}
        onDelete={handleDelete}
        nicheFilter={nicheFilter}
        setNicheFilter={setNicheFilter}
        page={page}
        total={total}
        pageSize={PAGE_SIZE}
        setPage={setPage}
      />
    </DomainErrorBoundary>
  );
}

export default DomainPage;

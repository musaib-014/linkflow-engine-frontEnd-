import { useState } from "react";

function DomainRow({ domain, onEdit, onDelete }) {
  const [metrics, setMetrics] = useState(null);
  const [show, setShow] = useState(false);

  async function loadMetrics() {
    if (metrics) return;
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/domain-metrics/${domain.id}`
    );
    const data = await res.json();
    setMetrics(data);
  }

  return (
    <tr>
      <td
        onMouseEnter={() => {
          setShow(true);
          loadMetrics();
        }}
        onMouseLeave={() => setShow(false)}
        className="hover-cell"
      >
        {domain.domainName}
        <a
          href={`https://${domain.domainName}`}
          target="_blank"
          rel="noreferrer"
        >
          🔗
        </a>

        {show && metrics && (
          <div className="tooltip">
            <p>DA: {metrics.da}</p>
            <p>DR: {metrics.dr}</p>
            <p>Traffic: {metrics.traffic}</p>
          </div>
        )}
      </td>

      <td>{domain.niche.join(", ")}</td>

      <td>
        <button onClick={() => onEdit(domain)}>Edit</button>
        <button onClick={() => onDelete(domain.id)}>Delete</button>
      </td>
    </tr>
  );
}

export default DomainRow;

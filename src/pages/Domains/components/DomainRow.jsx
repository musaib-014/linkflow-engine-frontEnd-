import { useNavigate, Link } from "react-router-dom";

function DomainRow({ domain }) {
  const navigate = useNavigate();
  return (
    <tr>
      <td>
        {domain.domainName}
        <Link
          to={`https://${domain.domainName}`}
          target="_blank"
          rel="noreferrer"
          title="Visit site"
        >
          🔗
        </Link>
      </td>

      <td>{domain.niche.join(", ")}</td>

      <td>{domain.personaName || "—"}</td>

      <td>
        <button onClick={() => navigate(`/domains/${domain.id}/metrics`)}>
          Metrics
        </button>
      </td>
    </tr>
  );
}
export default DomainRow;

import DomainFilter from "./DomainFilter";
import DomainRow from "./DomainRow";

function DomainTable({ domains, nicheFilter, setNicheFilter }) {
  return (
    <>
      <DomainFilter nicheFilter={nicheFilter} setNicheFilter={setNicheFilter} />

      <table>
        <thead>
          <tr>
            <th>Domain</th>
            <th>Niche</th>
            <th>Persona</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {domains.map((domain) => (
            <DomainRow key={domain.id} domain={domain} />
          ))}
        </tbody>
      </table>
    </>
  );
}
export default DomainTable;

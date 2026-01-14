import DomainFilter from "./DomainFilter";
import DomainRow from "./DomainRow";

function DomainTable({
  domains,
  onEdit,
  onDelete,
  nicheFilter,
  setNicheFilter,
  page,
  total,
  pageSize,
  setPage,
}) {
  const totalPages = Math.ceil(total / pageSize);

  return (
    <>
      <DomainFilter nicheFilter={nicheFilter} setNicheFilter={setNicheFilter} />

      <table>
        <thead>
          <tr>
            <th>Domain</th>
            <th>Niche</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {domains.map((d) => (
            <DomainRow
              key={d.id}
              domain={d}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>
        <span>
          Page {page} / {totalPages}
        </span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default DomainTable;

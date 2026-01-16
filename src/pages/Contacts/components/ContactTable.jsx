import ContactRow from "./ContactRow";

function ContactTable({
  contacts,
  onEdit,
  onAnonymize,
  onDelete,
  page,
  total,
  pageSize,
  setPage,
}) {
  const totalPages = Math.ceil(total / pageSize);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Trust</th>
            <th>Balance</th>
            <th>Created</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c) => (
            <ContactRow
              key={c.id}
              contact={c}
              onEdit={onEdit}
              onAnonymize={onAnonymize}
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
          {page} / {totalPages}
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

export default ContactTable;

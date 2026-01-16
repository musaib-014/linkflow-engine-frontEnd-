import { useEffect, useState } from "react";
import ContactErrorBoundary from "./ContactErrorBoundary";
import ContactForm from "./components/ContactForm";
import ContactTable from "./components/ContactTable";
import {
  fetchContacts,
  createContact,
  updateContact,
  anonymizeContact,
  deleteContact,
} from "./api/contactApi";
import "./Contacts.css";

const PAGE_SIZE = 5;

function ContactPage() {
  const [contacts, setContacts] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [selectedContact, setSelectedContact] = useState(null);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");

  useEffect(() => {
    loadContacts();
  }, [page, search, sortBy, sortOrder]);

  async function loadContacts() {
    try {
      setError(null);
      const res = await fetchContacts({
        page,
        limit: PAGE_SIZE,
        search,
        sortBy,
        sortOrder,
      });
      setContacts(res.data);
      setTotal(res.total);
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleAdd(contact) {
    const saved = await createContact(contact);
    setContacts((prev) => [saved, ...prev]);
  }

  async function handleUpdate(contact) {
    const updated = await updateContact(contact);
    setContacts((prev) => prev.map((c) => (c.id === updated.id ? updated : c)));
    setSelectedContact(null);
  }

  async function handleAnonymize(id) {
    await anonymizeContact(id);
    loadContacts();
  }

  async function handleDelete(id) {
    if (!window.confirm("Delete contact permanently?")) return;
    await deleteContact(id);
    loadContacts();
  }

  return (
    <ContactErrorBoundary>
      <h1>Contacts</h1>

      {error && <p className="error">{error}</p>}

      <ContactForm
        selectedContact={selectedContact}
        onAdd={handleAdd}
        onUpdate={handleUpdate}
      />

      <input
        placeholder="Search by name or email"
        value={search}
        onChange={(e) => {
          setPage(1);
          setSearch(e.target.value);
        }}
      />

      <select
        value={sortBy}
        onChange={(e) => {
          setPage(1);
          setSortBy(e.target.value);
        }}
      >
        <option value="">No Sorting</option>
        <option value="trustScore">Trust Score</option>
        <option value="balance">Balance</option>
      </select>

      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="desc">High → Low</option>
        <option value="asc">Low → High</option>
      </select>

      <ContactTable
        contacts={contacts}
        onEdit={setSelectedContact}
        onAnonymize={handleAnonymize}
        onDelete={handleDelete}
        page={page}
        total={total}
        pageSize={PAGE_SIZE}
        setPage={setPage}
      />
    </ContactErrorBoundary>
  );
}

export default ContactPage;

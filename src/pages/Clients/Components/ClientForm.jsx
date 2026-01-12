import { useEffect, useState } from "react";

function ClientForm({ onAdd, onUpdate, selectedClient }) {
  const [clientName, setClientName] = useState("");
  const [contactEmail, setConatactEmail] = useState("");

  useEffect(() => {
    if (selectedClient) {
      setClientName(selectedClient.clientName);
      setConatactEmail(selectedClient.contactEmail);
    } else {
      setClientName("");
      setConatactEmail("");
    }
  }, [selectedClient]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!clientName.trim() || !contactEmail.trim()) return;

    if (selectedClient) {
      onUpdate({
        id: selectedClient.id,
        clientName,
        contactEmail,
      });
    } else {
      onAdd({ clientName, contactEmail });
    }
    setClientName("");
    setConatactEmail("");
  }

  return (
    <form>
      <h2>{selectedClient ? "Edit Client" : "Add Client"}</h2>

      <input
        placeholder="Client Name"
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Contact Email"
        value={contactEmail}
        onChange={(e) => setConatactEmail(e.target.value)}
      />

      <button onClick={handleSubmit}>
        {selectedClient ? "Update" : "Create"}
      </button>
    </form>
  );
}

export default ClientForm;

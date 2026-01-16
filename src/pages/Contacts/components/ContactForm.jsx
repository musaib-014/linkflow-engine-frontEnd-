import { useEffect, useState } from "react";

function ContactForm({ selectedContact, onAdd, onUpdate }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [trustScore, setTrustScore] = useState(50);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (selectedContact) {
      setName(selectedContact.name);
      setEmail(selectedContact.email);
      setTrustScore(selectedContact.trustScore);
      setNotes(selectedContact.notes || "");
    } else {
      reset();
    }
  }, [selectedContact]);

  function reset() {
    setName("");
    setEmail("");
    setTrustScore(50);
    setNotes("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    const payload = { name, email, trustScore, notes };

    selectedContact
      ? onUpdate({ ...payload, id: selectedContact.id })
      : onAdd(payload);

    reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{selectedContact ? "Edit Contact" : "Add Contact"}</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label>Trust Score: {trustScore}</label>
      <input
        type="range"
        min="0"
        max="100"
        value={trustScore}
        onChange={(e) => setTrustScore(Number(e.target.value))}
      />

      <textarea
        placeholder="Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <button type="submit">{selectedContact ? "Update" : "Create"}</button>
    </form>
  );
}

export default ContactForm;

import { useEffect, useState } from "react";

function DomainForm({ onAdd, onUpdate, selectedDomain, personas }) {
  const [domainName, setDomainName] = useState("");
  const [nicheInput, setNicheInput] = useState("");
  const [niche, setNiche] = useState([]);
  const [personaId, setPersonaId] = useState("");

  useEffect(() => {
    if (selectedDomain) {
      setDomainName(selectedDomain.domainName);
      setNiche(selectedDomain.niche);
      setPersonaId(selectedDomain.personaId || "");
    } else {
      resetForm();
    }
  }, [selectedDomain]);

  function resetForm() {
    setDomainName("");
    setNiche([]);
    setPersonaId("");
    setNicheInput("");
  }

  function addNiche() {
    if (!nicheInput.trim()) return;
    if (niche.includes(nicheInput)) return;
    setNiche((prev) => [...prev, nicheInput.trim()]);
    setNicheInput("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    const payload = {
      domainName,
      niche,
      personaId: personaId || null,
    };

    selectedDomain
      ? onUpdate({ ...payload, id: selectedDomain.id })
      : onAdd(payload);

    resetForm();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{selectedDomain ? "Edit Domain" : "Add Domain"}</h2>

      <input
        placeholder="example.com"
        value={domainName}
        onChange={(e) => setDomainName(e.target.value)}
        required
      />

      <div>
        <input
          placeholder="Add niche"
          value={nicheInput}
          onChange={(e) => setNicheInput(e.target.value)}
        />
        <button type="button" onClick={addNiche}>
          Add
        </button>
      </div>

      <div>
        {niche.map((n) => (
          <span key={n} className="tag">
            {n}
          </span>
        ))}
      </div>

      <select value={personaId} onChange={(e) => setPersonaId(e.target.value)}>
        <option value="">No Persona</option>
        {personas.map((p) => (
          <option key={p.id} value={p.id}>
            {p.personaName}
          </option>
        ))}
      </select>

      <button type="submit">{selectedDomain ? "Update" : "Create"}</button>
    </form>
  );
}

export default DomainForm;

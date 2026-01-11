import { useEffect, useState } from "react";
import PersonaList from "../components/Persona/PersonaList";
import PersonaForm from "../components/Persona/PersonaForm";
import {
  fetchPersonas,
  createPersona,
  updatePersona,
  deletePersona,
} from "../api/personaApi";
import "./Personas.css";

function Personas() {
  const [persons, setPersonas] = useState([]);
  const [selectedPersona, setSelectedPersona] = useState(null);
  const [loading, setLoading] = useState(false);
  cost[(error, setError)] = useState(null);

  useEffect(() => {
    loadPersonas();
  }, []);

  async function loadPersonas() {
    try {
      setLoading(true);
      setError(null);

      const data = await fetchPersonas();
      setPersonas(data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  async function addPersona(persona) {
    try {
      setLoading(true);
      setError(null);

      const saved = await createPersona(persona);
      setPersonas((prev) => [...prev, saved]);
    } catch (err) {
      setError(err.message || "Failed to create persona");
    } finally {
      setLoading(false);
    }
  }

  async function deletePersona(id) {
    try {
      setLoading(true);
      setError(null);

      await deletePersona(id);
      setPersonas((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      setError(err.message || "Failed to delete persona");
    } finally {
      setLoading(false);
    }
  }

  function startEditPersona(persona) {
    setSelectedPersona(persona);
  }

  async function updatePersona(persona) {
    try {
      setLoading(true);
      setError(null);

      const updated = await updatePersona(persona);
      setPersonas((prev) =>
        prev.map((p) => (p.id === updated.id ? updated : p))
      );
      setSelectedPersona(null);
    } catch (err) {
      setError(err.message || "Failed to update persona");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="persona-page">
      <h1>Personas</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <PersonaForm
        onAddPersona={addPersona}
        onUpdatePersona={updatePersona}
        selectedPersona={selectedPersona}
      />

      <PersonaList
        personas={persons}
        onDeletePersona={deletePersona}
        onEditPersona={startEditPersona}
      />
    </div>
  );
}

export default Personas;

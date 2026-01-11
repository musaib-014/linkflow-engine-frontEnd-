import PersonaCard from "./PersonaCard";

function PersonaList({ personas, onDeletePersona, onEditPersona }) {
  return (
    <div className="persona-grid">
      {personas.map((persona) => (
        <PersonaCard
          key={persona.id}
          persona={persona}
          onDeletePersona={onDeletePersona}
          onEditPersona={onEditPersona}
        />
      ))}
    </div>
  );
}

export default PersonaList;

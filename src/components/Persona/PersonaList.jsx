import PersonaCard from "./PersonaCard";

function PersinaList({ personas }) {
  return (
    <div
      style={{
        display: "grid",
        gap: "16px",
        gridTemplateColumns: "repeat(auto-fill,minmax(250px, 1fr))",
      }}
    >
      {personas.map((persona) => (
        <PersinaList key={persona.id} persona={persona} />
      ))}
    </div>
  );
}

export default PersinaList;

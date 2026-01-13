function DomainFilter({ nicheFilter, setNicheFilter }) {
  return (
    <div className="filter">
      <label>Filter by Niche: </label>
      <input
        placeholder="e.g. Tech"
        value={nicheFilter}
        onChange={(e) => setNicheFilter(e.target.value)}
      />
    </div>
  );
}
export default DomainFilter;

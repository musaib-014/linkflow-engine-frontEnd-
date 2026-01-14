function DomainFilter({ nicheFilter, setNicheFilter }) {
  return (
    <input
      placeholder="Filter by niche"
      value={nicheFilter}
      onChange={(e) => setNicheFilter(e.target.value)}
    />
  );
}

export default DomainFilter;

const filters = ["All", "Security", "Research", "Web", "Desktop", "Cloud", "Automation", "Cryptography", "Toolkit"];

export default function ProjectFilters({ activeFilter, onFilterChange }) {
  return (
    <div className="filter-chips">
      {filters.map((f) => (
        <button key={f} className={`chip ${f === activeFilter ? "active" : ""}`} type="button" onClick={() => onFilterChange(f)}>
          {f}
        </button>
      ))}
    </div>
  );
}

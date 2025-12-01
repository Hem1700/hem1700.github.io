const filters = ["All", "Security Tools", "Research", "Web", "Desktop", "Cloud", "Automation"];

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

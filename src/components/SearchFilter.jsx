// Props: search, onSearch, category, onCategory, categories
export default function SearchFilter({ search, onSearch, category, onCategory, categories }) {
  return (
    <div className="filters">
      <input
        type="search"
        placeholder="Search attractions by name"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        aria-label="Search attractions by name"
      />
      <div className="chips" role="group" aria-label="Filter by category">
        {['All', ...categories].map((c) => (
          <button
            key={c}
            className={category === c ? 'chip active' : 'chip'}
            onClick={() => onCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  )
}

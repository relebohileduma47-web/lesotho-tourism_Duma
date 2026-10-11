import { useState, useMemo } from 'react'
import SearchFilter from '../components/SearchFilter'
import AttractionCard from '../components/AttractionCard'
import AttractionDetails from '../components/AttractionDetails'
import { attractions, categories } from '../data/attractions'

export default function Attractions() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [selected, setSelected] = useState(null)

  const results = useMemo(() => {
    const term = search.trim().toLowerCase()
    return attractions.filter(
      (a) =>
        a.name.toLowerCase().includes(term) &&
        (category === 'All' || a.category === category)
    )
  }, [search, category])

  const reset = () => { setSearch(''); setCategory('All') }

  return (
    <section className="section container">
      <h1 className="page-title">Attractions</h1>
      <p className="lead">Waterfalls, fortresses, ski slopes and quiet national parks.</p>

      <SearchFilter
        search={search} onSearch={setSearch}
        category={category} onCategory={setCategory}
        categories={categories}
      />

      <p className="muted" aria-live="polite">
        Showing {results.length} of {attractions.length} attractions
      </p>

      {results.length > 0 ? (
        <div className="grid">
          {results.map((a) => (
            <AttractionCard key={a.id} attraction={a} onSelect={setSelected} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <p>No attractions match "{search}". Check the spelling or clear the filters.</p>
          <button className="btn btn-dark" onClick={reset}>Clear filters</button>
        </div>
      )}

      {selected && <AttractionDetails attraction={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}

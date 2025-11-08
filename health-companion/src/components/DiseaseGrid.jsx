import { useMemo } from 'react'

const DiseaseGrid = ({
  diseases,
  searchTerm,
  onSearchChange,
  selectedId,
  onSelect
}) => {
  const filteredDiseases = useMemo(() => {
    if (!searchTerm) return diseases

    return diseases.filter((item) => {
      const term = searchTerm.toLowerCase()
      return (
        item.name.toLowerCase().includes(term) ||
        item.summary.toLowerCase().includes(term) ||
        item.motivation.toLowerCase().includes(term)
      )
    })
  }, [diseases, searchTerm])

  return (
    <section className="grid-section" id="conditions">
      <div className="grid-header">
        <h2>Common conditions we support</h2>
        <p>
          Select a condition to view simple diet, movement, and lifestyle steps. Each tip
          includes a measure so you can track your progress.
        </p>
        <label className="search-bar">
          <span className="search-icon" aria-hidden="true">
            🔍
          </span>
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search by name or symptom (e.g., sugar, breathing)"
            aria-label="Search conditions"
          />
        </label>
      </div>

      <div className="grid-cards">
        {filteredDiseases.map((disease) => {
          const isActive = disease.id === selectedId
          return (
            <article
              key={disease.id}
              className={`grid-card ${isActive ? 'grid-card--active' : ''}`}
              onClick={() => onSelect(disease.id)}
            >
              <header>
                <h3>{disease.name}</h3>
                <p className="grid-card-benefit">{disease.motivation}</p>
              </header>
              <p className="grid-card-summary">{disease.summary}</p>
              <footer>
                <p className="grid-card-prevalence">{disease.prevalence}</p>
                <button
                  className="secondary-btn"
                  type="button"
                  aria-label={`Open plan for ${disease.name}`}
                >
                  View plan
                </button>
              </footer>
            </article>
          )
        })}
        {filteredDiseases.length === 0 && (
          <p className="empty-state">
            No conditions found. Try different keywords like “heart”, “liver”, or “mood”.
          </p>
        )}
      </div>
    </section>
  )
}

export default DiseaseGrid

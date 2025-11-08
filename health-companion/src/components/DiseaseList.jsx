import { useMemo } from 'react'

const DiseaseList = ({ diseases, searchTerm, onSearchChange, onSelectDisease }) => {
  const filteredDiseases = useMemo(() => {
    if (!searchTerm) return diseases
    const term = searchTerm.toLowerCase()
    return diseases.filter(
      (item) =>
        item.name.toLowerCase().includes(term) ||
        item.summary.toLowerCase().includes(term) ||
        item.motivation.toLowerCase().includes(term)
    )
  }, [diseases, searchTerm])

  return (
    <div className="screen list-screen">
      <header className="screen-header">
        <h2>Choose a health guide</h2>
        <p>Tap a condition to see quick facts and healthy habits that you can start now.</p>
        <label className="search-bar">
          <input
            type="search"
            placeholder="Search by name or symptom"
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
            aria-label="Search diseases"
          />
        </label>
      </header>

      <div className="disease-list">
        {filteredDiseases.map((disease) => (
          <button
            key={disease.id}
            type="button"
            className="disease-card"
            onClick={() => onSelectDisease(disease.id)}
          >
            <span className="disease-name">{disease.name}</span>
            <span className="disease-motivation">{disease.motivation}</span>
            <span className="disease-prevalence">{disease.prevalence}</span>
          </button>
        ))}

        {filteredDiseases.length === 0 && (
          <p className="empty-state">
            No match yet. Try another word like “blood pressure”, “breathing”, or “mood”.
          </p>
        )}
      </div>
    </div>
  )
}

export default DiseaseList

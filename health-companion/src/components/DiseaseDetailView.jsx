const categories = [
  { key: 'diet', label: 'Control through diet' },
  { key: 'exercise', label: 'Control through exercise' },
  { key: 'lifestyle', label: 'Control through lifestyle' }
]

const DiseaseDetailView = ({ disease, onBack, onOpenCategory }) => {
  if (!disease) return null

  return (
    <div className="screen detail-screen">
      <button type="button" className="back-btn" onClick={onBack}>
        ← All conditions
      </button>
      <header className="screen-header">
        <h2>{disease.name}</h2>
        <p>{disease.summary}</p>
        <div className="info-pill">{disease.prevalence}</div>
      </header>

      <section className="info-block">
        <h3>Watch for these signs</h3>
        <ul>
          {disease.warningSigns.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="info-block alert">
        <h3>Contact a healthcare professional when…</h3>
        <ul>
          {disease.doctorContact.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="category-links">
        {categories.map((category) => (
          <button
            key={category.key}
            type="button"
            className="category-card"
            onClick={() => onOpenCategory(category.key)}
          >
            <span className="category-label">{category.label}</span>
            <span className="category-chevron">›</span>
          </button>
        ))}
      </section>
    </div>
  )
}

export default DiseaseDetailView

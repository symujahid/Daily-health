const CategoryDetail = ({ disease, categoryKey, onBack }) => {
  if (!disease || !categoryKey) return null

  const category = disease.categories[categoryKey] || []

  const labels = {
    diet: 'Control through diet',
    exercise: 'Control through exercise',
    lifestyle: 'Control through lifestyle'
  }

  return (
    <div className="screen category-screen">
      <button type="button" className="back-btn" onClick={onBack}>
        ← {disease.name}
      </button>
      <header className="screen-header">
        <h2>{labels[categoryKey] || 'Healthy habits'}</h2>
        <p>
          Follow these steps to support your health. Each tip lists the key action, how to
          measure it, and a trusted source for confidence.
        </p>
      </header>

      <div className="tip-list">
        {category.map((tip, index) => (
          <article key={`${categoryKey}-${index}`} className="tip-card">
            <h3>{tip.title}</h3>
            <p className="tip-description">{tip.description}</p>
            {tip.serving && (
              <p className="tip-meta">
                <strong>Serving / recipe:</strong> {tip.serving}
              </p>
            )}
            {tip.duration && (
              <p className="tip-meta">
                <strong>Time target:</strong> {tip.duration}
              </p>
            )}
            {tip.metric && (
              <p className="tip-meta">
                <strong>Track it by:</strong> {tip.metric}
              </p>
            )}
            <p className="tip-evidence">
              Evidence: {tip.evidence}{' '}
              {tip.sourceUrl && (
                <a href={tip.sourceUrl} target="_blank" rel="noreferrer">
                  View source
                </a>
              )}
            </p>
            {tip.media && (
              <a className="media-link" href={tip.media.url} target="_blank" rel="noreferrer">
                ▶ Watch: {tip.media.label}
              </a>
            )}
          </article>
        ))}
        {category.length === 0 && (
          <p className="empty-state">
            We are collecting resources for this section. Please check back soon.
          </p>
        )}
      </div>
    </div>
  )
}

export default CategoryDetail

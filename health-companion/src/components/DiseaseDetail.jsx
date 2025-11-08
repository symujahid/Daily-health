import { useEffect, useState } from 'react'

const tabs = [
  { key: 'diet', label: 'Diet & Recipes' },
  { key: 'exercise', label: 'Exercise & Movement' },
  { key: 'lifestyle', label: 'Lifestyle Habits' }
]

const TipCard = ({ tip, category, tipId, onSave }) => {
  return (
    <article className="tip-card">
      <header>
        <h4>{tip.title}</h4>
        <p className="tip-metric">{tip.metric || tip.serving || tip.duration}</p>
      </header>
      <p className="tip-description">{tip.description}</p>
      {tip.serving && (
        <p className="tip-extra">
          <strong>Serving/recipe idea:</strong> {tip.serving}
        </p>
      )}
      {tip.duration && (
        <p className="tip-extra">
          <strong>Time target:</strong> {tip.duration}
        </p>
      )}
      <p className="tip-evidence">
        Evidence: {tip.evidence}{' '}
        {tip.sourceUrl && (
          <a href={tip.sourceUrl} target="_blank" rel="noreferrer">
            (view source)
          </a>
        )}
      </p>
      {tip.media && (
        <a
          className="media-link"
          href={tip.media.url}
          target="_blank"
          rel="noreferrer"
        >
          ▶ {tip.media.label}
        </a>
      )}
      <button
        className="secondary-btn"
        type="button"
        onClick={() => onSave({ tip, category, tipId })}
      >
        Add to my habit tracker
      </button>
    </article>
  )
}

const DiseaseDetail = ({ disease, onSaveTip }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].key)

  useEffect(() => {
    setActiveTab(tabs[0].key)
  }, [disease?.id])

  if (!disease) {
    return (
      <section className="detail-section">
        <div className="detail-empty">
          <h2>Choose a condition to view your plan</h2>
          <p>
            Tap any condition from the list to see evidence-based diet, exercise, and
            lifestyle actions. Each tip includes a way to measure progress.
          </p>
        </div>
      </section>
    )
  }

  const tips = disease.categories[activeTab] || []

  return (
    <section className="detail-section">
      <header className="detail-header">
        <p className="detail-tag">Personal guide</p>
        <h2>{disease.name}</h2>
        <p className="detail-summary">{disease.summary}</p>
        <div className="detail-pill-group">
          {disease.warningSigns.map((sign) => (
            <span key={sign} className="detail-pill">
              {sign}
            </span>
          ))}
        </div>
        <div className="detail-alert">
          <strong>Call a professional when:</strong>
          <ul>
            {disease.doctorContact.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </header>

      <nav className="tab-bar" aria-label="Health actions">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`tab-btn ${activeTab === tab.key ? 'tab-btn--active' : ''}`}
            type="button"
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <div className="tips-wrapper">
        {tips.map((tip, index) => {
          const tipId = `${disease.id}-${activeTab}-${index}`
          return (
          <TipCard
              key={tipId}
              tipId={tipId}
              tip={tip}
              category={activeTab}
              onSave={onSaveTip}
            />
          )
        })}
        {tips.length === 0 && (
          <p className="empty-state">
            Content coming soon. Check back later or choose another category.
          </p>
        )}
      </div>
    </section>
  )
}

export default DiseaseDetail

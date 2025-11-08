import { useEffect, useMemo, useState } from 'react'

const HabitTracker = ({
  disease,
  tipOptions,
  pendingTipId,
  onCreate,
  onDelete,
  logs,
  onClearPending
}) => {
  const [selectedTipId, setSelectedTipId] = useState('')
  const [frequency, setFrequency] = useState('')
  const [progress, setProgress] = useState('')
  const [notes, setNotes] = useState('')

  const placeholderDisease = disease?.name || 'your condition'

  const visibleLogs = useMemo(() => {
    if (!disease) return []
    return logs.filter((item) => item.diseaseId === disease.id)
  }, [logs, disease])

  const selectedTip = useMemo(
    () => tipOptions.find((item) => item.id === selectedTipId),
    [selectedTipId, tipOptions]
  )

  useEffect(() => {
    if (!pendingTipId) return
    const nextTip = tipOptions.find((item) => item.id === pendingTipId)
    if (nextTip) {
      setSelectedTipId(nextTip.id)
      setFrequency(nextTip.metric || nextTip.serving || nextTip.duration || '')
    }
  }, [pendingTipId, tipOptions])

  useEffect(() => {
    if (!selectedTip) return
    setFrequency((value) => value || selectedTip.metric || selectedTip.serving || selectedTip.duration || '')
  }, [selectedTip])

  useEffect(() => {
    if (!disease) {
      setSelectedTipId('')
      setFrequency('')
      setProgress('')
      setNotes('')
    }
  }, [disease?.id])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!selectedTip) return

    onCreate({
      tipId: selectedTip.id,
      tipTitle: selectedTip.title,
      category: selectedTip.category,
      metric: selectedTip.metric,
      frequency: frequency || selectedTip.metric,
      progress,
      notes,
      diseaseId: disease?.id
    })

    setProgress('')
    setNotes('')
    onClearPending?.()
  }

  return (
    <section className="tracker-section">
      <header>
        <h2>My habit tracker</h2>
        <p>
          Add the tips you want to practice for {placeholderDisease}. Update your own way
          to measure progress and note how it feels over time.
        </p>
      </header>

      <form className="tracker-form" onSubmit={handleSubmit}>
        <label>
          <span>Choose a tip to track</span>
          <select
            value={selectedTipId}
            onChange={(event) => setSelectedTipId(event.target.value)}
            required
            disabled={!disease}
          >
            <option value="">Select a tip</option>
            {tipOptions.map((tip) => (
              <option key={tip.id} value={tip.id}>
                {tip.title} · {tip.categoryLabel}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>Your target</span>
          <input
            type="text"
            value={frequency}
            onChange={(event) => setFrequency(event.target.value)}
            placeholder={selectedTip?.metric || 'e.g., 3 servings a day'}
            required
            disabled={!disease}
          />
        </label>

        <label>
          <span>What did you achieve today?</span>
          <input
            type="text"
            value={progress}
            onChange={(event) => setProgress(event.target.value)}
            placeholder="e.g., walked 25 minutes"
            required
            disabled={!disease}
          />
        </label>

        <label>
          <span>Notes or feelings</span>
          <textarea
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            placeholder="Any wins, struggles, or reminders for tomorrow."
            rows={3}
            disabled={!disease}
          />
        </label>

        <button className="primary-btn" type="submit" disabled={!selectedTip || !disease}>
          Save my update
        </button>
      </form>

      <div className="tracker-log">
        <h3>Progress log</h3>
        {visibleLogs.length === 0 ? (
          <p className="empty-state">
            No entries yet. Choose a tip and record your first win—it keeps you motivated!
          </p>
        ) : (
          <ul>
            {visibleLogs.map((log) => (
              <li key={log.id} className="log-item">
                <div>
                  <p className="log-title">
                    {log.tipTitle}{' '}
                    <span className="log-tag">{log.categoryLabel.toUpperCase()}</span>
                  </p>
                  <p className="log-disease">{log.diseaseName}</p>
                  <p className="log-metric">
                    <strong>Target:</strong> {log.frequency}
                  </p>
                  <p className="log-progress">
                    <strong>Today:</strong> {log.progress}
                  </p>
                  {log.notes && <p className="log-notes">{log.notes}</p>}
                  {log.createdAt && (
                    <p className="log-date">
                      <strong>Saved:</strong>{' '}
                      {new Date(log.createdAt).toLocaleString(undefined, {
                        hour: '2-digit',
                        minute: '2-digit',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  className="link-btn"
                  onClick={() => onDelete(log.id)}
                  aria-label={`Delete log for ${log.tipTitle}`}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default HabitTracker

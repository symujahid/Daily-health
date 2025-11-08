import { useMemo, useState } from 'react'
import './App.css'
import Hero from './components/Hero.jsx'
import DiseaseGrid from './components/DiseaseGrid.jsx'
import DiseaseDetail from './components/DiseaseDetail.jsx'
import HabitTracker from './components/HabitTracker.jsx'
import { diseases } from './data/diseases.js'

const categoryLabels = {
  diet: 'Diet',
  exercise: 'Exercise',
  lifestyle: 'Lifestyle'
}

function App() {
  const [selectedDiseaseId, setSelectedDiseaseId] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [habitLogs, setHabitLogs] = useState([])
  const [pendingTipId, setPendingTipId] = useState(null)

  const selectedDisease = useMemo(
    () => diseases.find((item) => item.id === selectedDiseaseId) || null,
    [selectedDiseaseId]
  )

  const tipOptions = useMemo(() => {
    if (!selectedDisease) return []

    return Object.entries(selectedDisease.categories).flatMap(([category, items]) =>
      items.map((tip, index) => ({
        id: `${selectedDisease.id}-${category}-${index}`,
        title: tip.title,
        category,
        categoryLabel: categoryLabels[category] || 'Lifestyle',
        metric: tip.metric || tip.serving || tip.duration || '',
        serving: tip.serving,
        duration: tip.duration
      }))
    )
  }, [selectedDisease])

  const handleExplore = () => {
    if (!selectedDiseaseId && diseases.length > 0) {
      setSelectedDiseaseId(diseases[0].id)
    }
    const section = document.getElementById('conditions')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSelectDisease = (diseaseId) => {
    setSelectedDiseaseId(diseaseId)
    setPendingTipId(null)
  }

  const handleSaveTip = ({ tipId }) => {
    setPendingTipId(tipId)
    const formSection = document.getElementById('habit-tracker')
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const generateLogId = () => {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
      return crypto.randomUUID()
    }
    return `log-${Date.now()}-${Math.random().toString(16).slice(2)}`
  }

  const handleCreateLog = (payload) => {
    if (!selectedDisease) return
    const categoryLabel = categoryLabels[payload.category] || 'Lifestyle'
    setHabitLogs((previous) => [
      {
        id: generateLogId(),
        ...payload,
        categoryLabel,
        diseaseName: selectedDisease.name,
        createdAt: new Date().toISOString()
      },
      ...previous
    ])
  }

  const handleDeleteLog = (logId) => {
    setHabitLogs((previous) => previous.filter((log) => log.id !== logId))
  }

  return (
    <div className="app-shell">
      <Hero onExplore={handleExplore} />
      <DiseaseGrid
        diseases={diseases}
        selectedId={selectedDiseaseId}
        onSelect={handleSelectDisease}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      <DiseaseDetail disease={selectedDisease} onSaveTip={handleSaveTip} />
      <div id="habit-tracker">
        <HabitTracker
          disease={selectedDisease}
          tipOptions={tipOptions}
          pendingTipId={pendingTipId}
          onCreate={handleCreateLog}
          onDelete={handleDeleteLog}
          logs={habitLogs}
          onClearPending={() => setPendingTipId(null)}
        />
      </div>
      <footer className="app-footer">
        <p>
          Educational resource only. This guide does not replace individualized medical
          care. Always follow the instructions of your healthcare professionals.
        </p>
      </footer>
    </div>
  )
}

export default App

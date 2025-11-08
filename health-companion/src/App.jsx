import { useMemo, useState } from 'react'
import './App.css'
import LandingScreen from './components/LandingScreen.jsx'
import DiseaseList from './components/DiseaseList.jsx'
import DiseaseDetailView from './components/DiseaseDetailView.jsx'
import CategoryDetail from './components/CategoryDetail.jsx'
import { diseases } from './data/diseases.js'

const VIEWS = {
  landing: 'landing',
  list: 'list',
  detail: 'detail',
  category: 'category'
}

function App() {
  const [view, setView] = useState(VIEWS.landing)
  const [selectedDiseaseId, setSelectedDiseaseId] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const selectedDisease = useMemo(
    () => diseases.find((item) => item.id === selectedDiseaseId) || null,
    [selectedDiseaseId]
  )

  const handleStart = () => {
    setView(VIEWS.list)
  }

  const handleSelectDisease = (diseaseId) => {
    setSelectedDiseaseId(diseaseId)
    setSelectedCategory(null)
    setView(VIEWS.detail)
  }

  const handleOpenCategory = (categoryKey) => {
    setSelectedCategory(categoryKey)
    setView(VIEWS.category)
  }

  const handleBackToDetail = () => {
    setSelectedCategory(null)
    setView(VIEWS.detail)
  }

  const handleBackToList = () => {
    setSelectedDiseaseId(null)
    setSelectedCategory(null)
    setView(VIEWS.list)
  }

  return (
    <div className="app-shell">
      {view === VIEWS.landing && <LandingScreen onStart={handleStart} />}

      {view === VIEWS.list && (
        <DiseaseList
          diseases={diseases}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onSelectDisease={handleSelectDisease}
        />
      )}

      {view === VIEWS.detail && selectedDisease && (
        <DiseaseDetailView
          disease={selectedDisease}
          onBack={handleBackToList}
          onOpenCategory={handleOpenCategory}
        />
      )}

      {view === VIEWS.category && selectedDisease && selectedCategory && (
        <CategoryDetail
          disease={selectedDisease}
          categoryKey={selectedCategory}
          onBack={handleBackToDetail}
        />
      )}
    </div>
  )
}

export default App

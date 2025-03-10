import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import TrainerForm from './pages/TrainerForm'

function App() {
  return (
    <Routes>
      <Route path="/" element={<TrainerForm />} />
    </Routes>
  )
}

export default App

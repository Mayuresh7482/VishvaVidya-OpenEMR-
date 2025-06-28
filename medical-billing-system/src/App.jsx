import { useState } from 'react'
import './App.css'
import Header from './components/Layout/Header'
import Navbar from './components/Layout/Navbar'
import BillingManager from './components/BillingManager/BillingManager'

function App() {
  const [activeTab, setActiveTab] = useState('billing')

  return (
    <div className="app">
      <Header />
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="content">
        <BillingManager />
      </div>
    </div>
  )
}

export default App
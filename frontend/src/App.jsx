import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Calendar from './components/Calendar'
import './App.css'
import axios from 'axios'

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedProvider, setSelectedProvider] = useState({ id: 1, name: 'Administrator' })
  const [appointmentsByDate, setAppointmentsByDate] = useState({})

  // Fetch all appointments for the current month and provider for calendar dots
  useEffect(() => {
    const fetchAppointments = async () => {
      if (!selectedProvider || !selectedDate) return
      const year = selectedDate.getFullYear()
      const month = selectedDate.getMonth()
      const firstDay = new Date(year, month, 1)
      const allRes = await axios.get(`http://localhost:5000/api/calendar?provider=${selectedProvider.name}`)
      const map = {}
      allRes.data.forEach(ev => {
        const d = new Date(ev.date)
        const key = d.toISOString().slice(0, 10)
        map[key] = true
      })
      setAppointmentsByDate(map)
    }
    fetchAppointments()
  }, [selectedProvider, selectedDate])

  return (
    <div className="App">
      <Navbar />
      <div className="dashboard-flex">
        <div className="sidebar">
          <Sidebar
            selectedDate={selectedDate}
            onDateChange={setSelectedDate}
            selectedProvider={selectedProvider}
            onProviderChange={setSelectedProvider}
            appointmentsByDate={appointmentsByDate}
          />
        </div>
        <div className="main-content">
          <Calendar
            selectedDate={selectedDate}
            selectedProvider={selectedProvider}
          />
        </div>
      </div>
    </div>
  )
}

export default App

import { useState, useEffect } from 'react';
import axios from 'axios';
import ProviderDropdown from './ProviderDropdown';
import TimeSlotGrid from './TimeSlotGrid';
import EventModal from './EventModal';

export default function Calendar({ selectedDate, selectedProvider }) {
  const [providers, setProviders] = useState(['Dr. Smith', 'Dr. Johnson']);
  const [timeSlots, setTimeSlots] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalInitialData, setModalInitialData] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Generate time slots for 24 hours in 15-min intervals
  useEffect(() => {
    const slots = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        slots.push({ time, appointment: null });
      }
    }
    setTimeSlots(slots);
  }, []);

  // Fetch appointments for selected provider and date
  useEffect(() => {
    if (!selectedProvider || !selectedDate) return;
    setLoading(true);
    const dateStr = selectedDate.toISOString().slice(0, 10);
    axios.get(`http://localhost:5000/api/calendar?provider=${selectedProvider.name}&date=${dateStr}`)
      .then(res => {
        console.log('Appointments from backend:', res.data);
        setTimeSlots(prevSlots => {
          const updated = prevSlots.map(slot => {
            const appointment = res.data.find(app => app.time === slot.time);
            return { ...slot, appointment };
          });
          console.log('Updated timeSlots:', updated);
          return updated;
        });
      })
      .finally(() => setLoading(false));
  }, [selectedProvider, selectedDate]);

  // Open modal for new appointment
  const handleAddAppointment = () => {
    setModalInitialData({
      provider: selectedProvider.name,
      date: selectedDate ? selectedDate.toISOString().slice(0, 10) : '',
    });
    setModalOpen(true);
  };

  // Open modal for a specific time slot
  const handleSlotClick = (slot) => {
    setModalInitialData({
      provider: selectedProvider.name,
      date: selectedDate ? selectedDate.toISOString().slice(0, 10) : '',
      time: slot.time,
    });
    setModalOpen(true);
  };

  // Save appointment
  const handleSave = async (formData) => {
    try {
      await axios.post('http://localhost:5000/api/calendar', formData);
      setModalOpen(false);
      setSuccessMsg('Appointment saved!');
      console.log('Saved!');
      setTimeout(() => setSuccessMsg(''), 5000);
      // Refresh slots
      setLoading(true);
      const dateStr = selectedDate.toISOString().slice(0, 10);
      const res = await axios.get(`http://localhost:5000/api/calendar?provider=${selectedProvider.name}&date=${dateStr}`);
      setTimeSlots(prevSlots => prevSlots.map(slot => {
        const appointment = res.data.find(app => app.time === slot.time);
        return { ...slot, appointment };
      }));
      setLoading(false);
    } catch (err) {
      if (err.response && err.response.status === 409) {
        setErrorMsg('Appointment already exists for this provider, date, and time.');
      } else {
        setErrorMsg('Failed to save appointment!');
      }
      setTimeout(() => setErrorMsg(''), 5000);
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      maxWidth: '100vw',
    }}>
      {/* <h1 style={{ fontSize: '3vw', minFontSize: 24 }}>Your Clinic Name Here</h1> */}
      <button onClick={handleAddAppointment} style={{ maxWidth: 260, width: '100%', marginBottom: 16 }}>Add New Appointment</button>
      <div style={{ flex: 1, minWidth: 0, width: '100%' }}>
        {loading ? (
          <div style={{ textAlign: 'center', padding: 40 }}>
            <span className="loader" style={{ color: '#2196f3', fontWeight: 600 }}>Loading appointments...</span>
          </div>
        ) : (
          <TimeSlotGrid 
            slots={timeSlots} 
            onSlotClick={handleSlotClick} 
          />
        )}
      </div>
      <EventModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        initialData={modalInitialData}
        selectedDate={selectedDate}
        providers={[{ id: 1, name: 'Administrator' }, ...providers.map((name, i) => ({ id: i + 2, name }))]}
      />
      {successMsg && (
        <div aria-live="polite" style={{
          position: 'fixed',
          top: 80,
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#2196f3',
          color: '#fff',
          padding: '16px 32px',
          borderRadius: 8,
          fontWeight: 600,
          fontSize: 18,
          zIndex: 9999,
          boxShadow: '0 2px 12px rgba(33,150,243,0.15)'
        }}>
          {successMsg}
        </div>
      )}
      {errorMsg && (
        <div aria-live="polite" style={{
          position: 'fixed',
          top: 140,
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#d32f2f',
          color: '#fff',
          padding: '16px 32px',
          borderRadius: 8,
          fontWeight: 600,
          fontSize: 18,
          zIndex: 9999,
          boxShadow: '0 2px 12px rgba(33,150,243,0.15)'
        }}>
          {errorMsg}
        </div>
      )}
    </div>
  );
}
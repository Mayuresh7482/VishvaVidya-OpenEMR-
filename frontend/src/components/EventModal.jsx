import React, { useState } from 'react';

const defaultProviders = [
  { id: 1, name: 'Administrator' },
  // Add more providers as needed
];

const categories = [
  'In Office',
  'Telehealth',
  'Follow-up',
  // Add more categories as needed
];

export default function EventModal({
  open,
  onClose,
  onSave,
  initialData = {},
  providers = defaultProviders,
  selectedDate,
  selectedTime
}) {
  const [form, setForm] = useState({
    title: initialData.title || '',
    patient: initialData.patient || '',
    provider: initialData.provider || providers[0].name,
    category: initialData.category || categories[0],
    date: initialData.date || (selectedDate ? selectedDate.toISOString().slice(0, 10) : ''),
    time: initialData.time || selectedTime || '',
    duration: initialData.duration || 15,
    comments: initialData.comments || '',
  });

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ensure time is in HH:mm format
    let [h, m] = form.time.split(':');
    h = h ? h.padStart(2, '0') : '00';
    m = m ? m.padStart(2, '0') : '00';
    const formattedTime = `${h}:${m}`;
    onSave({ ...form, time: formattedTime });
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(0,0,0,0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    }}>
      <form
        onSubmit={handleSubmit}
        style={{
          background: '#fff',
          borderRadius: 8,
          padding: 32,
          minWidth: 340,
          maxHeight: '80vh',
          overflowY: 'auto',
          boxShadow: '0 4px 24px rgba(33,150,243,0.15)',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          color: '#111',
        }}
      >
        <h2 style={{ margin: 0, color: '#111' }}>Add/Edit Appointment</h2>
        <label style={{ color: '#111', fontWeight: 500 }}>
          Title
          <input name="title" value={form.title} onChange={handleChange} required style={{ width: '100%', color: '#111', border: '1px solid #2196f3', borderRadius: 4, padding: 8, marginTop: 4, background: '#fff' }} />
        </label>
        <label style={{ color: '#111', fontWeight: 500 }}>
          Patient Name
          <input name="patient" value={form.patient} onChange={handleChange} required style={{ width: '100%', color: '#111', border: '1px solid #2196f3', borderRadius: 4, padding: 8, marginTop: 4, background: '#fff' }} />
        </label>
        <label style={{ color: '#111', fontWeight: 500 }}>
          Provider
          <select name="provider" value={form.provider} onChange={handleChange} required style={{ width: '100%', color: '#111', border: '1px solid #2196f3', borderRadius: 4, padding: 8, marginTop: 4, background: '#fff' }}>
            {providers.map((p) => (
              <option key={p.id} value={p.name}>{p.name}</option>
            ))}
          </select>
        </label>
        <label style={{ color: '#111', fontWeight: 500 }}>
          Category
          <select name="category" value={form.category} onChange={handleChange} required style={{ width: '100%', color: '#111', border: '1px solid #2196f3', borderRadius: 4, padding: 8, marginTop: 4, background: '#fff' }}>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </label>
        <label style={{ color: '#111', fontWeight: 500 }}>
          Date
          <input type="date" name="date" value={form.date} onChange={handleChange} required style={{ width: '100%', color: '#111', border: '1px solid #2196f3', borderRadius: 4, padding: 8, marginTop: 4, background: '#fff' }} />
        </label>
        <label style={{ color: '#111', fontWeight: 500 }}>
          Time
          <input type="time" name="time" value={form.time} onChange={handleChange} required style={{ width: '100%', color: '#111', border: '1px solid #2196f3', borderRadius: 4, padding: 8, marginTop: 4, background: '#fff' }} />
        </label>
        <label style={{ color: '#111', fontWeight: 500 }}>
          Duration (minutes)
          <input type="number" name="duration" value={form.duration} onChange={handleChange} min={5} max={120} step={5} required style={{ width: '100%', color: '#111', border: '1px solid #2196f3', borderRadius: 4, padding: 8, marginTop: 4, background: '#fff' }} />
        </label>
        <label style={{ color: '#111', fontWeight: 500 }}>
          Comments
          <textarea name="comments" value={form.comments} onChange={handleChange} style={{ width: '100%', color: '#111', border: '1px solid #2196f3', borderRadius: 4, padding: 8, marginTop: 4, background: '#fff' }} />
        </label>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
          <button type="button" onClick={onClose} style={{ background: '#fff', color: '#2196f3', border: '1px solid #2196f3', padding: '8px 16px', borderRadius: 4, cursor: 'pointer', fontWeight: 600 }}>Cancel</button>
          <button type="submit" style={{ background: '#2196f3', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: 4, cursor: 'pointer', fontWeight: 600 }}>Save</button>
        </div>
      </form>
    </div>
  );
} 
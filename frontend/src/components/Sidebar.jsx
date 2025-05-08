import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay, addMonths, subMonths } from 'date-fns';

const providers = [
  { id: 1, name: 'Administrator' },
  // Add more providers as needed
];

const Sidebar = ({ selectedDate, onDateChange, selectedProvider, onProviderChange, appointmentsByDate = {} }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const renderHeader = () => (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
      <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>&lt;</button>
      <span style={{ fontWeight: 'bold' }}>{format(currentMonth, 'MMMM yyyy')}</span>
      <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>&gt;</button>
    </div>
  );

  const renderDays = () => {
    const days = [];
    const date = startOfWeek(currentMonth, { weekStartsOn: 0 });
    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} style={{ flex: 1, textAlign: 'center', fontWeight: 'bold' }}>
          {format(addDays(date, i), 'EEEEE')}
        </div>
      );
    }
    return <div style={{ display: 'flex' }}>{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 0 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 });
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, 'd');
        const cloneDay = day;
        const dateKey = format(day, 'yyyy-MM-dd');
        const hasAppointment = !!appointmentsByDate[dateKey];
        days.push(
          <div
            key={day}
            onClick={() => onDateChange(cloneDay)}
            style={{
              flex: 1,
              height: 32,
              margin: 2,
              borderRadius: 4,
              background: isSameDay(day, selectedDate) ? '#2196f3' : isSameMonth(day, monthStart) ? '#e0e0e0' : '#f5f5f5',
              color: isSameDay(day, selectedDate) ? '#fff' : '#000',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: isSameDay(day, selectedDate) ? 'bold' : 'normal',
              position: 'relative',
            }}
          >
            {formattedDate}
            {hasAppointment && (
              <span style={{
                display: 'block',
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: '#2196f3',
                marginTop: 2,
              }}></span>
            )}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(<div key={day} style={{ display: 'flex' }}>{days}</div>);
      days = [];
    }
    return <div>{rows}</div>;
  };

  return (
    <aside style={{
      width: 260,
      background: '#222',
      color: '#fff',
      padding: 16,
      minHeight: '100vh',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
    }}>
      {/* Calendar */}
      <div>
        {renderHeader()}
        {renderDays()}
        {renderCells()}
      </div>
      {/* Providers */}
      <div>
        <div style={{ fontWeight: 'bold', marginBottom: 8 }}>Providers</div>
        <div style={{ background: '#fff', color: '#222', borderRadius: 4, padding: 8, maxHeight: 100, overflowY: 'auto' }}>
          {providers.map((provider) => (
            <div
              key={provider.id}
              onClick={() => onProviderChange(provider)}
              style={{
                padding: 4,
                borderRadius: 4,
                background: selectedProvider?.id === provider.id ? '#2196f3' : 'transparent',
                color: selectedProvider?.id === provider.id ? '#fff' : '#222',
                cursor: 'pointer',
                marginBottom: 2,
              }}
            >
              {provider.name}
            </div>
          ))}
        </div>
      </div>
      {/* Clinic Color Legend */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 24, height: 24, background: '#8ff', borderRadius: 4 }} />
        <span>Your Clinic Name Here</span>
      </div>
    </aside>
  );
};

export default Sidebar; 
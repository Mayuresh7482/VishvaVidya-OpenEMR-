export default function TimeSlotGrid({ slots, onSlotClick }) {
  return (
    <div style={{ height: '80vh', width: '100%', overflowY: 'auto', borderRadius: 4, boxShadow: '0 2px 8px rgba(33,150,243,0.08)' }} className="timeslot-scroll">
      <table style={{ width: '100%' }}>
        <tbody>
          {slots.map((slot) => (
            <tr key={slot.time}>
              <td>{slot.time}</td>
              <td onClick={() => onSlotClick(slot)} style={{ cursor: 'pointer', position: 'relative' }}>
                {slot.appointment && (
                  <span style={{
                    display: 'inline-block',
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: '#2196f3',
                    marginRight: 8,
                    verticalAlign: 'middle',
                  }}></span>
                )}
                {slot.appointment ? slot.appointment.patient : 'Available'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
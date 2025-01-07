import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './eventcalender.css';

const localizer = momentLocalizer(moment);

function EventCalendar() {
  const [events, setEvents] = useState([
    {
      
      title: 'Orientation',
      start: new Date(2024, 6, 10, 10, 0),
      end: new Date(2024, 6, 10, 12, 0),
    },
    {
      title: 'Sports Day',
      start: new Date(2024, 6, 15, 14, 0),
      end: new Date(2024, 6, 15, 18, 0),
    },
  ]);

  const [newEvent, setNewEvent] = useState({
    title: '',
    start: '',
    end: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleAddEvent = () => {
    const start = new Date(newEvent.start);
    const end = new Date(newEvent.end);
    setEvents([...events, { ...newEvent, start, end }]);
    setNewEvent({ title: '', start: '', end: '' });
  };

  return (
    <div className="event-calendar">
      <h2>Event Calendar</h2>
      <br></br>
      <center>
        <div className="add-event-form">
          <input
            type="text"
            name="title"
            placeholder="Event Title"
            value={newEvent.title}
            onChange={handleInputChange}
            className="input-field"
          />
          <input
            type="datetime-local"
            name="start"
            placeholder="Start Date"
            value={newEvent.start}
            onChange={handleInputChange}
            className="input-field"
          />
          <input
            type="datetime-local"
            name="end"
            placeholder="End Date"
            value={newEvent.end}
            onChange={handleInputChange}
            className="input-field"
          />
          <button onClick={handleAddEvent} className="add-button">Add Event</button>
        </div>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 400, width: 800, margin: '50px 0' }}
        />
      </center>
      <div className="upcoming-events">
        <h3>Upcoming Events</h3>
        <br></br>
        <div className="events-row">
          {events.map((event, index) => (
            <div key={index} className="upcoming-event">
              <h4 className="event-title">{event.title}</h4>
              <p className="event-time">{moment(event.start).format('MMMM Do YYYY, h:mm a')} to {moment(event.end).format('MMMM Do YYYY, h:mm a')}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventCalendar;

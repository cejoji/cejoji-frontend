import { useState } from 'react';

export default function Book() {
  const [form, setForm] = useState({ destination: '', date: '', guests: 1, notes: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const res = await fetch('https://cejoji-backend.onrender.com/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error();
      setMessage('Booking successful!');
    } catch {
      setMessage('Booking failed.');
    }
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Book a Trip</h1>
      <form onSubmit={handleSubmit}>
        <input name="destination" onChange={handleChange} placeholder="Destination" required /><br />
        <input type="date" name="date" onChange={handleChange} required /><br />
        <input type="number" name="guests" min="1" onChange={handleChange} required /><br />
        <textarea name="notes" onChange={handleChange} placeholder="Notes" /><br />
        <button type="submit">Book</button>
      </form>
      <p>{message}</p>
    </main>
  );
}
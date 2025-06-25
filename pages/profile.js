import { useEffect, useState } from 'react';

export default function Profile() {
  const [user, setUser] = useState({});
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    const fetchBookings = async () => {
      const res = await fetch('https://cejoji-backend.onrender.com/api/bookings', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      setBookings(data);
    };

    const decodeToken = () => {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        setUser(payload);
      } catch {}
    };

    decodeToken();
    fetchBookings();
  }, []);

  return (
    <main style={{ padding: '2rem' }}>
      <h1>My Profile</h1>
      <p><strong>User ID:</strong> {user.userId}</p>
      <h2>My Bookings</h2>
      <ul>
        {bookings.map((b, i) => (
          <li key={i}>{b.destination} on {b.date} ({b.guests} guests)</li>
        ))}
      </ul>
    </main>
  );
}
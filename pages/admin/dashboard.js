import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const BarChart = dynamic(() => import('../../components/BarChart'), { ssr: false });

export default function AdminDashboard() {
  const [bookings, setBookings] = useState([]);
  const [users, setUsers] = useState([]);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const headers = { 'Authorization': `Bearer ${token}` };

    fetch('https://cejoji-backend.onrender.com/api/admin/bookings', { headers })
      .then(res => res.json()).then(setBookings);

    fetch('https://cejoji-backend.onrender.com/api/admin/users', { headers })
      .then(res => res.json()).then(setUsers);

    fetch('https://cejoji-backend.onrender.com/api/admin/revenue', { headers })
      .then(res => res.json()).then(data => setRevenue(data.total || 0));
  }, []);

  const exportCSV = () => {
    const csv = bookings.map(b =>
      [b._id, b.destination, b.date, b.guests].join(',')
    ).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'bookings.csv';
    link.click();
  };

  const exportPDF = () => {
    window.print();
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Admin Dashboard</h1>
      <div>
        <p><strong>Total Bookings:</strong> {bookings.length}</p>
        <p><strong>Total Users:</strong> {users.length}</p>
        <p><strong>Total Revenue:</strong> ${revenue}</p>
      </div>
      <BarChart data={bookings} />
      <button onClick={exportCSV}>Export CSV</button>
      <button onClick={exportPDF}>Export PDF</button>
    </main>
  );
}
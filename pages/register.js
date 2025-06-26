import { useState } from 'react';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch('https://cejoji-backend.onrender.com/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) {
        console.error('Server error:', data);
        setMessage(data.message || 'Registration failed.');
      } else {
        setMessage('Registration successful! Please log in.');
      }
    } catch (err) {
      console.error('Network or server error:', err);
      setMessage('Something went wrong.');
    }
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" onChange={handleChange} placeholder="Name" required /><br />
        <input type="email" name="email" onChange={handleChange} placeholder="Email" required /><br />
        <input type="password" name="password" onChange={handleChange} placeholder="Password" required /><br />
        <button type="submit">Register</button>
      </form>
      <p>{message}</p>
    </main>
  );
}
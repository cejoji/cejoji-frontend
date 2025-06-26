import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch('https://cejoji-backend.onrender.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      console.log('Login response:', data);
      if (res.ok && data.token) {
        localStorage.setItem('token', data.token);
        setMessage('Login successful! Redirecting...');
        setTimeout(() => router.push('/profile'), 1000);
      } else {
        setMessage(data.message || 'Login failed.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setMessage('Something went wrong.');
    }
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" onChange={handleChange} placeholder="Email" required /><br />
        <input type="password" name="password" onChange={handleChange} placeholder="Password" required /><br />
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </main>
  );
}
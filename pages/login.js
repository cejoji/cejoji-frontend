import { useState } from 'react';
import { loginUser } from '../lib/api';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(form);
      localStorage.setItem('token', res.token);
      setMessage('Login successful');
    } catch (err) {
      setMessage('Login failed');
    }
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" onChange={handleChange} placeholder="Email" required /><br />
        <input name="password" type="password" onChange={handleChange} placeholder="Password" required /><br />
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </main>
  );
}
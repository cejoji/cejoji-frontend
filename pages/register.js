import { useState } from 'react';
import { registerUser } from '../lib/api';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser(form);
      setMessage(res.message);
    } catch (err) {
      setMessage('Registration failed');
    }
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" onChange={handleChange} placeholder="Name" required /><br />
        <input name="email" type="email" onChange={handleChange} placeholder="Email" required /><br />
        <input name="password" type="password" onChange={handleChange} placeholder="Password" required /><br />
        <button type="submit">Register</button>
      </form>
      <p>{message}</p>
    </main>
  );
}
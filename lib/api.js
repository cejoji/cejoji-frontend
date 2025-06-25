export async function registerUser(data) {
  const res = await fetch('https://cejoji-backend.onrender.com/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error('Registration error');
  return res.json();
}

export async function loginUser(data) {
  const res = await fetch('https://cejoji-backend.onrender.com/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error('Login error');
  return res.json();
}
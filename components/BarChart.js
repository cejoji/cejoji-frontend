import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function SimpleBarChart({ data }) {
  const chartData = data.map((b, i) => ({
    name: b.destination,
    guests: b.guests
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={chartData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="guests" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}
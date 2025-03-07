import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function TopProductsChart({ topProducts }: { topProducts: { name: string; count: number }[] }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold text-white mb-4 text-center">📦 Top Productos Más Vendidos</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={topProducts} margin={{ top: 10, right: 10, left: 0, bottom: 40 }}>
          <XAxis dataKey="name" stroke="#ffffff" tick={{ fontSize: 12 }} angle={-20} dy={10} />
          <YAxis stroke="#ffffff" />
          <Tooltip contentStyle={{ background: "#1f2937", borderRadius: "8px", color: "#fff" }} />
          <Bar dataKey="count" fill="#60a5fa" radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

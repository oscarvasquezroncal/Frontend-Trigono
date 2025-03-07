import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

export default function OrdersChart({ data }: { data: { [key: string]: number } }) {
  const chartData = Object.entries(data).map(([month, count]) => ({ month, count }));

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-white mb-4 text-center flex items-center justify-center gap-2">
        📊 Ordenes por Mes
      </h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={chartData} barGap={6}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
          <XAxis dataKey="month" stroke="#ffffff" tick={{ fontSize: 12 }} />
          <YAxis stroke="#ffffff" tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1f2937",
              color: "#fff",
              borderRadius: "8px",
              padding: "8px",
              border: "none",
            }}
            cursor={{ fill: "rgba(255, 255, 255, 0.1)" }}
          />
          <Bar dataKey="count" fill="#60a5fa" radius={[5, 5, 0, 0]} animationDuration={800} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

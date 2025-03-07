export default function StatsCard({ title, value }: { title: string; value: string }) {
    return (
      <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <h2 className="text-lg text-white font-semibold">{title}</h2>
        <p className="text-3xl font-bold text-white mt-2">{value}</p>
      </div>
    );
  }
  
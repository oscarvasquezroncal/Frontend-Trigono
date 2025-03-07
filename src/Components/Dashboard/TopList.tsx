interface TopListProps {
    title: React.ReactNode; 
    data: { name: string; value: string }[]; 
    loading: boolean;
  }
  
  export default function TopList({ title, data, loading }: TopListProps) {
    return (
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
        <h2 className="text-lg font-semibold text-gray-300 mb-4">{title}</h2>
        {loading ? (
          <p className="text-gray-400">Cargando...</p>
        ) : (
          <ul className="space-y-2">
            {data.length === 0 ? (
              <p className="text-gray-500">No hay datos disponibles</p>
            ) : (
              data.map((item, index) => (
                <li key={index} className="flex justify-between text-gray-300">
                  <span className="truncate">{item.name}</span>
                  <span className="font-bold text-blue-400">{item.value}</span>
                </li>
              ))
            )}
          </ul>
        )}
      </div>
    );
  }
  
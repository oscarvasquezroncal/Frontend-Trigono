import useDashboard from "../../hooks/useDashboard";
import OrdersChart from "./OrdersChart";
import TopList from "./TopList";
import { motion } from "framer-motion";
import { BarChart, Users, Package } from "lucide-react";

export default function Dashboard() {
  const { data, loading, error } = useDashboard();

  if (error)
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-red-400 text-center mt-10 text-lg"
      >
        ❌ Error al cargar los datos: {error}
      </motion.div>
    );

  return (
    <div className="flex flex-col items-center py-10 px-6">
      <motion.h1
        className="text-4xl font-bold mb-10 text-center flex items-center gap-3"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <BarChart className="w-8 h-8 text-blue-400" />
        Panel de Insights
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 flex flex-col items-center"
        >
          <h2 className="text-lg font-semibold text-gray-300 flex items-center gap-2">
            💰 Total de Ventas
          </h2>
          <p className="text-4xl font-bold text-green-400 mt-2">
            {loading ? "Cargando..." : `S/ ${data?.stats.total_sales.toLocaleString("es-PE", { minimumFractionDigits: 2 })}`}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-grow"
        >
          <OrdersChart data={data?.ordersByMonth || {}} />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <TopList
            title={
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-yellow-400" />
                Top Clientes
              </div>
            }
            data={data?.topCustomers?.map((customer: [string, number]) => ({
              name: customer[0],
              value: `S/ ${customer[1].toLocaleString("es-PE", { minimumFractionDigits: 2 })}`,
            })) || []}
            loading={loading}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <TopList
            title={
              <div className="flex items-center gap-2">
                <Package className="w-5 h-5 text-orange-400" />
                Categorías Más Vendidas
              </div>
            }
            data={data?.topCategories?.map((category: [string, number]) => ({
              name: category[0],
              value: `${category[1].toLocaleString("es-PE")}`,
            })) || []}
            loading={loading}
          />
        </motion.div>
      </div>
    </div>
  );
}

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import useOrders from "../hooks/useOrders";
import OrderCard from "./OrderCard";
import OrderSkeleton from "./OrderSkeleton";
import StatusFilter from "./StatusFilter";
import { translateState } from "../utils/translateState";
import { FileQuestion } from "lucide-react"; 

export default function OrdersList() {
  const { orders = [], loading, error } = useOrders();
  const [filter, setFilter] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("");

  const containerRef = useRef(null);

  const filteredOrders = Array.isArray(orders)
    ? orders.filter(order =>
        order.name?.toLowerCase().includes(filter.toLowerCase()) &&
        (statusFilter === "" || order.state === statusFilter)
      )
    : [];

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
    );
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className="max-w-6xl w-full px-6 py-10"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.h1
        className="text-4xl font-bold text-center mb-8 text-white tracking-wide"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        Ordenes de Venta
      </motion.h1>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <motion.input
          type="text"
          placeholder="Buscar orden..."
          className="w-full p-3 text-lg bg-gray-700 border border-gray-600 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        />

        <StatusFilter selectedStatus={statusFilter} setSelectedStatus={setStatusFilter} />
      </div>

      {loading ? (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {Array(6).fill(0).map((_, index) => (
            <OrderSkeleton key={index} />
          ))}
        </motion.div>
      ) : filteredOrders.length === 0 ? (
        <motion.div
          className="flex flex-col items-center justify-center mt-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <FileQuestion size={80} className="text-gray-500 mb-4 animate-pulse" />
          <motion.p
            className="text-lg text-gray-400"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            No hay ordenes en <span className="text-blue-400">{translateState(statusFilter)}</span>.
          </motion.p>
          <motion.p
            className="text-gray-500 mt-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            Intenta seleccionar otro estado o agregar nuevas ordenes.
          </motion.p>
        </motion.div>
      ) : (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 5 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
          }}
        >
          {filteredOrders.map(order => (
            <OrderCard
              key={order.id}
              id={order.id}
              name={order.name}
              date={new Date(order.date_order).toLocaleDateString()}
              state={translateState(order.state)}
              total={order.amount_total}
            />
          ))}
        </motion.div>
      )}

      {error && (
        <motion.p
          className="text-red-400 text-center text-lg mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {error}
        </motion.p>
      )}
    </motion.div>
  );
}

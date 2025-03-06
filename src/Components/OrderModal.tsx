import { motion } from "framer-motion";
import { X } from "lucide-react";

interface OrderModalProps {
  order: {
    id: number;
    name: string;
    date: string;
    state: string;
    total: number;
  };
  onClose: () => void;
}

export default function OrderModal({ order, onClose }: OrderModalProps) {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-gray-900 p-8 rounded-lg shadow-xl w-full max-w-lg relative flex flex-col items-center text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <button
          className="absolute top-4 right-4 text-white bg-red-500 hover:bg-red-700 p-2 rounded-full transition-all"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        <motion.h2
          className="text-3xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {order.name}
        </motion.h2>

        <motion.p className="text-gray-400 text-lg">Fecha: {order.date}</motion.p>
        <motion.p className="text-gray-300 text-lg">Estado: {order.state}</motion.p>
        <motion.p className="text-green-400 font-bold text-2xl mt-4">
          Total: S/{order.total.toFixed(2)}
        </motion.p>

        <motion.div
          className="w-full h-1 bg-blue-500 rounded-lg mt-4"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </motion.div>
    </motion.div>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import OrderModal from "./OrderModal";

interface OrderProps {
  id: number;
  name: string;
  date: string;
  state: string;
  total: number;
}

export default function OrderCard({ id, name, date, state, total }: OrderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        key={id}
        className="relative bg-gray-800 bg-opacity-60 backdrop-blur-md shadow-md p-6 rounded-xl border border-gray-700 transition-all overflow-hidden cursor-pointer"
        whileHover={{
          scale: 1.02,
          boxShadow: "0px 5px 15px rgba(0, 255, 255, 0.2)",
        }}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => setIsOpen(true)}
      >
        <h2 className="text-xl font-semibold text-white">{name}</h2>
        <p className="text-gray-400">Fecha: {date}</p>
        <p className="text-gray-300">Estado: {state}</p>
        <p className="text-green-400 font-bold text-lg">Total: S/{total.toFixed(2)}</p>
      </motion.div>

      {isOpen && <OrderModal order={{ id, name, date, state, total }} onClose={() => setIsOpen(false)} />}
    </>
  );
}

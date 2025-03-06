import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import { translateState } from "../utils/translateState";

interface StatusFilterProps {
  selectedStatus: string;
  setSelectedStatus: (status: string) => void;
}

const statuses = ["", "draft", "sale", "done", "cancel"];

export default function StatusFilter({ selectedStatus, setSelectedStatus }: StatusFilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full md:w-1/3">
      <motion.button
        className="w-full bg-gray-800 text-white p-3 rounded-lg flex justify-between items-center text-lg shadow-md hover:bg-gray-700 transition-all border border-gray-700"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.95 }}
      >
        {selectedStatus ? translateState(selectedStatus) : "Filtrar por Estado"}
        <ChevronDown
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          size={22}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="absolute w-full bg-gray-900 text-white rounded-lg shadow-xl mt-2 overflow-hidden z-50 border border-gray-700 backdrop-blur-md"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {statuses.map((status) => (
              <motion.li
                key={status}
                className={`p-4 cursor-pointer flex justify-between items-center hover:bg-gray-700 transition-all ${
                  selectedStatus === status ? "bg-blue-500 text-white font-semibold" : "text-gray-300"
                }`}
                onClick={() => {
                  setSelectedStatus(status);
                  setIsOpen(false);
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {status ? translateState(status) : "Todos los Estados"}
                {selectedStatus === status && <Check size={22} />}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

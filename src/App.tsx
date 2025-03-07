import { useState } from "react";
import OrdersList from "./Components/OrdersList";
import Dashboard from "./Components/Dashboard/Dashboard";
import Navbar from "./Components/Navbar/Navbar";
import { motion } from "framer-motion";

export default function App() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "orders">("dashboard");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col overflow-x-hidden relative">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-grow flex justify-center items-start px-8 pt-24">
        <motion.div
          key={activeTab}
          className="w-full max-w-7xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {activeTab === "dashboard" ? <Dashboard /> : <OrdersList />}
        </motion.div>
      </div>
    </div>
  );
}

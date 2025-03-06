import { motion } from "framer-motion";

export default function OrderSkeleton() {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-60 backdrop-blur-md shadow-md p-6 rounded-xl border border-gray-700 animate-pulse relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 animate-slide"></div>

      <div className="h-6 bg-gray-700 rounded w-3/4 mb-3 relative z-10"></div>
      <div className="h-4 bg-gray-700 rounded w-1/2 mb-3 relative z-10"></div>
      <div className="h-4 bg-gray-700 rounded w-1/4 mb-3 relative z-10"></div>
      <div className="h-6 bg-gray-600 rounded w-full relative z-10"></div>
    </motion.div>
  );
}

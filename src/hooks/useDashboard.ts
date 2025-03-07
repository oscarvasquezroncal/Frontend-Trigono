import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

// ✅ Definir el tipo de datos esperados del backend
interface DashboardData {
  stats: {
    total_sales: number;
    orders_by_state: Record<string, number>;
  };
  ordersByMonth: { [key: string]: number };
  topCustomers: [string, number][];
  topCategories: [string, number][];
}

export default function useDashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [statsRes, ordersRes, customersRes, categoriesRes] = await Promise.all([
          axios.get(`${API_URL}/dashboard/stats`),
          axios.get(`${API_URL}/dashboard/orders-by-month`),
          axios.get(`${API_URL}/dashboard/top-customers`),
          axios.get(`${API_URL}/dashboard/top-categories`),
        ]);

        setData({
          stats: statsRes.data,
          ordersByMonth: ordersRes.data.orders_by_month,
          topCustomers: customersRes.data.top_customers,
          topCategories: categoriesRes.data.top_categories,
        });
      } catch {
        setError("Error al obtener datos del servidor.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, loading, error };
}

import { useEffect, useState } from "react";
import axios from "axios";

interface Order {
  id: number;
  name: string;
  create_date: string;
  date_order: string;
  state: string;
  amount_total: number;
}

export default function useOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/orders`);
        setOrders(response.data.orders);
      } catch {
        setError("Error al obtener las ordenes de venta.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return { orders, loading, error };
}

import React, { useState, useEffect } from 'react';

const OrdersList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('/api/orders');
        if (!response.ok) {
          throw new Error('Error al obtener las órdenes');
        }
        const data = await response.json();
        // Se asume que el backend devuelve un objeto { status:"success", result: [...] }
        setOrders(data.result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Órdenes</h1>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            <p>Número: {order.number}</p>
            <p>Total: {order.totalPrice}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrdersList;

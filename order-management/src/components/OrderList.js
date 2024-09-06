import React, { useState, useEffect } from 'react';
import OrderDetails from './OrderDetails';
import '../styles/OrderList.css';

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:5072/api/order');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="order-container">
      <ul className="order-list">
        {orders.map((order, index) => (
          <li 
            key={index} 
            className="order-item" 
            onClick={() => setSelectedOrder(order)}
          >
            Заказ №{order.orderNumber}
          </li>
        ))}
      </ul>
      <div className="order-details">
        <OrderDetails order={selectedOrder} />
      </div>
    </div>
  );
};

export default OrderList;

import React, { useState } from 'react';
import './styles/App.css';
import OrderForm from './components/OrderForm';
import OrderList from './components/OrderList';
import OrderDetails from './components/OrderDetails';

const App = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  return (
    <div className="container">
      <h1>Управление заказами</h1>
      <OrderForm />
      <OrderList onSelectOrder={setSelectedOrder} />
      <OrderDetails order={selectedOrder} />
    </div>
  );
};

export default App;

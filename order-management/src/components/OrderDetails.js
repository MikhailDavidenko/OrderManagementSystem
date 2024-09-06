import React from 'react';
import '../styles/OrderDetails.css';

const OrderDetails = ({ order }) => {
  if (!order) return <div>Выберите заказ для просмотра</div>;

  return (
    <div>
      <h2>Детали заказа</h2>
      <p>Номер заказа: {order.orderNumber}</p>
      <p>Город отправителя: {order.senderCity}</p>
      <p>Адрес отправителя: {order.senderAddress}</p>
      <p>Город получателя: {order.receiverCity}</p>
      <p>Адрес получателя: {order.receiverAddress}</p>
      <p>Вес груза: {order.cargoWeight}</p>
      <p>Дата забора: {order.pickupDate}</p>
    </div>
  );
};

export default OrderDetails;

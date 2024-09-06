import React, { useState } from 'react';
import axios from 'axios';
import '../styles/OrderForm.css'; 

const OrderForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    senderCity: '',
    senderAddress: '',
    receiverCity: '',
    receiverAddress: '',
    cargoWeight: '',
    pickupDate: '',
    orderNumber: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5072/api/order', formData);
      window.location.reload();
      
    } catch (error) {
      console.error('Ошибка при создании заказа', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Создать заказ</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Город отправителя</label>
          <input
            name="senderCity"
            className="form-control"
            placeholder="Город отправителя"
            value={formData.senderCity}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Адрес отправителя</label>
          <input
            name="senderAddress"
            className="form-control"
            placeholder="Адрес отправителя"
            value={formData.senderAddress}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Город получателя</label>
          <input
            name="receiverCity"
            className="form-control"
            placeholder="Город получателя"
            value={formData.receiverCity}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Адрес получателя</label>
          <input
            name="receiverAddress"
            className="form-control"
            placeholder="Адрес получателя"
            value={formData.receiverAddress}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Вес груза</label>
          <input
            name="cargoWeight"
            type="number"
            className="form-control"
            placeholder="Вес груза"
            value={formData.cargoWeight}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Дата забора груза</label>
          <input
            name="pickupDate"
            type="date"
            className="form-control"
            value={formData.pickupDate}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn">Создать заказ</button>
      </form>
    </div>
  );
};

export default OrderForm;

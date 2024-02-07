import React, { useState } from 'react';
import { useCart } from '../CartContext/CartContext';
import './Checkout.css';
import { db } from '../../firebase/firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';

const Checkout = () => {
  const { state, dispatch } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    phone: '',
    email: '',
    confirmEmail: '',
  });
  const [showForm, setShowForm] = useState(false);
  const [purchaseConfirmed, setPurchaseConfirmed] = useState(false);
  const [trackingCode, setTrackingCode] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleConfirmPurchase = async () => {
    try {
      const newOrderRef = await addDoc(collection(db, 'orders'), {
        buyer: {
          name: formData.name,
          lastName: formData.lastName,
          phone: formData.phone,
          email: formData.email,
        },
      });
      setTrackingCode(newOrderRef.id);
      setShowForm(true);
      setPurchaseConfirmed(true);
    } catch (error) {
      console.error('Error al confirmar la compra:', error);
    }
  };

  const handleClearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const handleCheckout = () => {
    setShowForm(true);
  };

  return (
    <div className="Checkout">
      <h2>Checkout</h2>
      {showForm && !purchaseConfirmed ? (
        <div>
          <h3>Información del Comprador</h3>
          <form>
            <label>
              Nombre:
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
            </label>
            <label>
              Apellido:
              <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
            </label>
            <label>
              Teléfono:
              <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
            </label>
            <label>
              Confirmar Email:
              <input type="email" name="confirmEmail" value={formData.confirmEmail} onChange={handleInputChange} />
            </label>

            <button type="button" onClick={handleConfirmPurchase}>
              Confirmar Compra
            </button>
          </form>
        </div>
      ) : (
        <div>
          <div>
            {state.cart.map((item, index) => (
              <div key={index}>
                <p>{item.title} - Cantidad: {item.quantity}</p>
              </div>
            ))}
          </div>
          <div>
            <h3>Total de la Compra: ${state.cart.reduce((total, item) => total + item.price * item.quantity, 0)}</h3>
            <div>
              <button onClick={handleClearCart} disabled={state.cart.length === 0}>
                Vaciar Carrito
              </button>
              <button onClick={handleCheckout} disabled={state.cart.length === 0 || showForm}>
                Pagar
              </button>
            </div>
          </div>        </div>
      )}

      {purchaseConfirmed && (
        <div>
          <h3>Compra Confirmada</h3>
          <p>Detalle de la compra:</p>
          <p>Nombre: {formData.name}</p>
          <p>Apellido: {formData.lastName}</p>
          <p>Teléfono: {formData.phone}</p>
          <p>Email: {formData.email}</p>
          {trackingCode !== null && <p>Número de Seguimiento: {trackingCode}</p>}
        </div>
      )}
    </div>
  );
};

export default Checkout;

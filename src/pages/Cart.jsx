import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { generateReceipt } from '../utils/receiptGenerator';

const Cart = () => {
  const { cartItems, clearCart } = useContext(CartContext); // Agregamos clearCart

  // Calcula el total asegurando que los subtotales sean numéricos
  const totalAmount = cartItems.reduce((acc, item) => {
    const itemSubtotal = item.price * item.quantity; // Asegúrate de calcular el subtotal
    return acc + (isNaN(itemSubtotal) ? 0 : itemSubtotal); // Solo suma si no es NaN
  }, 0);

  const handlePurchase = () => {
    generateReceipt(cartItems, totalAmount);
  };

  return (
    <div className="container mt-5">
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items in your cart yet.</p>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Size</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>${item.price}</td> {/* Formatea el precio */}
                  <td>{item.size}</td>
                  <td>{item.quantity}</td>
                  <td>${(item.price * item.quantity)}</td> {/* Muestra el subtotal */}
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Total: ${totalAmount}</h3> {/* Muestra el total */}
          
          <div className="d-flex justify-content-between">
            <button className="btn btn-primary" onClick={handlePurchase}>COMPRAR</button>
            {/* Botón para vaciar el carrito */}
            <button className="btn btn-danger" onClick={clearCart}>Vaciar Carrito</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

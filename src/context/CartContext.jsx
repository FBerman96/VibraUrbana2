// CartContext.jsx
import React, { createContext, useState } from 'react';

// Crear el contexto del carrito
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar productos al carrito
  const addToCart = (product) => {
    console.log("Producto a añadir:", product); // Revisa si 'quantity' se está pasando correctamente

    setCartItems((prevItems) => {
        const existingProduct = prevItems.find(item => item.id === product.id && item.size === product.size);

        if (existingProduct) {
            return prevItems.map(item =>
                item.id === product.id && item.size === product.size
                    ? { 
                        ...item, 
                        quantity: item.quantity + product.quantity, // Aquí product.quantity debe tener el valor correcto
                        subtotal: item.subtotal + product.subtotal 
                        
                    }
                    : item
            );
        } else {
            return [...prevItems, product]; // No olvides que product debe tener quantity aquí
        }
    });
};

  

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

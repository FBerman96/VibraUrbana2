  import React, { useContext, useState } from 'react';
  import { CartContext } from '../context/CartContext';
  import ProductCard from '../components/ProductCard';
  import { Toast, ToastContainer } from 'react-bootstrap';
  import product1 from '../assets/product1.jpg'; 
  import product2 from '../assets/product2.jpg'; 
  import product3 from '../assets/product3.jpg';
  import product4 from '../assets/product4.jpg';
  import product5 from '../assets/product5.jpg';
  import product6 from '../assets/product6.jpg';
  import product7 from '../assets/product7.jpg';
  import product8 from '../assets/product8.jpg';
  import product9 from '../assets/product9.jpg';
  import product10 from '../assets/product10.jpg';
  import product11 from '../assets/product11.jpg';
  import product12 from '../assets/product12.jpg';
  import '../App.css';
  import './Products.css'; // Archivo CSS personalizado

    

  const Products = () => {
    const { addToCart } = useContext(CartContext);
    const [showToast, setShowToast] = useState(false);
    


    const products = [
      { id: 1, name: 'BLAZER TRAJE ESTRUCTURA', price: 279999, image: product1 },
      { id: 2, name: 'CAMISETA BÁSICA HEAVY WEIGHT', price: 42990, image: product2 },
      { id: 3, name: 'JEANS CARGO SALPICADURAS', price: 139990, image: product3 },
      { id: 4, name: 'CAMISA DENIM', price: 79990, image: product4 },
      { id: 5, name: 'VESTIDO MIDI VUELO ZW COLLECTION', price: 245990, image: product5 },
      { id: 6, name: 'CAMISETA NUDO ALGODÓN', price: 59990, image: product6 },
      { id: 7, name: 'POLO ESTRUCTURA', price: 89990, image: product7 },
      { id: 8, name: 'BERMUDA PERLAS', price: 63990, image: product8 },
      { id: 9, name: 'CAMISETA SURF VIBES', price: 28990, image: product9 },
      { id: 10, name: 'BERMUDA DENIM BÁSICA', price: 79990, image: product10 },
      { id: 11, name: 'CONJUNTO SUDADERA Y LEGGING MINNIE MOUSE © DISNEY', price: 63990, image: product11 },
      { id: 12, name: 'VESTIDO TEXTO TABLAS TÉCNICO', price: 63990, image: product12 },
      // Más productos...
    ];

    const handleAddToCart = (product) => {
      addToCart({ ...product});
      setShowToast(true);
    };
  // Componente del Toast que se renderiza en el portal
  const renderToast = () => (
    <ToastContainer position="top-end" className="toast-fixed">
      <Toast bg="success" onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
        <Toast.Header>
          <strong className="me-auto">Success</strong>
        </Toast.Header>
        <Toast.Body>Product added to cart!</Toast.Body>
      </Toast>
    </ToastContainer>
  );
    return (
      <div className="container mt-5">
        <h1>Nuestros Productos</h1>
        <div className="row product-row"> {/* Agregamos la clase CSS personalizada */}
          {products.map((product) => (
            <div key={product.id} className="col-md-4 mb-4 product-column"> {/* Más separación entre productos */}
              <ProductCard product={product} addToCart={handleAddToCart} />
            </div>
          ))}
        </div>

        {/* Renderizamos el ToastContainer dentro de un portal */}
        {renderToast()} {/* Probar sin portal */}
        </div>
      
    );
  };

  export default Products;

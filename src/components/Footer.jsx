import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="header-footer mt-auto">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-4 text-center text-md-start">
            <h5>Vibra Urbana</h5>
            <p>&copy; 2024 Vibra Urbana. All rights reserved.</p>
          </div>
          <div className="col-md-4 text-center">
            <Link to="/contacto" className="nav-link text-decoration-none">Contáctenos</Link><br />
            <Link to="/acerca-de-nosotros" className="nav-link text-decoration-none">Acerca de nosotros</Link>
          </div>
          <div className="col-md-4 text-center text-md-end">
            <p>Síguenos en redes sociales</p>
            <a href="#" className="nav-link me-2">Instagram</a>
            <a href="#" className="nav-link me-2">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

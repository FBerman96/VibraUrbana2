import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children, requiredRole }) => {
  const { currentUser, loading } = useContext(AuthContext);

  if (loading) {
    // Mientras se carga el usuario, no redirige ni muestra contenido
    return <div>Cargando...</div>;  // Puedes mostrar un spinner u otra indicación visual
  }

  if (!currentUser) {
    // Si no hay usuario logueado, redirige al login
    return <Navigate to="/login" />;
  }

  if (requiredRole && currentUser.role !== requiredRole) {
    // Si el usuario logueado no tiene el rol adecuado, redirige al home
    return <Navigate to="/" />;
  }

  // Si el usuario está logueado y tiene el rol correcto, renderiza el componente hijo
  return children;
};

export default ProtectedRoute;

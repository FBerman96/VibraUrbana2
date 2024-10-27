// AdminPanel.jsx
import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Modal, Button } from 'react-bootstrap';

const AdminPanel = () => {
  const { currentUser } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null); // Usuario seleccionado para editar
  const [showModal, setShowModal] = useState(false); // Estado para controlar el modal
  const [updatedUser, setUpdatedUser] = useState({
    username: '',
    email: '',
    nombre: '',
    apellido: '',
    password: '',
    role: '' // Incluimos el rol en los datos a actualizar
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser || currentUser.role !== 'admin') {
      navigate('/');
    }

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, [currentUser, navigate]);

  const deleteUser = (username) => {
    const updatedUsers = users.filter(user => user.username !== username);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  const editUser = (user) => {
    setSelectedUser(user);
    setUpdatedUser(user); // Cargamos los datos del usuario seleccionado en el formulario
    setShowModal(true); // Mostrar el modal de edición
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveChanges = () => {
    const updatedUsers = users.map(user =>
      user.username === selectedUser.username ? updatedUser : user
    );
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setShowModal(false); // Cerrar el modal
  };

  return (
    <div className="container mt-5">
      <h1>Panel de Administración</h1>
      {users.length === 0 ? (
        <p>No hay usuarios registrados.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Role</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.nombre}</td>
                <td>{user.apellido}</td>
                <td>{user.role}</td>
                <td>
                  <button className="btn btn-warning" onClick={() => editUser(user)}>Editar</button>
                  <button className="btn btn-danger" onClick={() => deleteUser(user.username)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Modal de edición */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                className="form-control"
                value={updatedUser.username}
                onChange={handleInputChange}
                disabled
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={updatedUser.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                className="form-control"
                value={updatedUser.nombre}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="apellido" className="form-label">Apellido</label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                className="form-control"
                value={updatedUser.apellido}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                value={updatedUser.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="role" className="form-label">Role</label>
              <select
                id="role"
                name="role"
                className="form-control"
                value={updatedUser.role}
                onChange={handleInputChange}
              >
                <option value="cliente">Cliente</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminPanel;

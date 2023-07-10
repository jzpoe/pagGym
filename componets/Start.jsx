import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoginForm() {
 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === '123456') {
      alert('Usuario autenticado correctamente');
      
    } else {
      alert('Credenciales inválidas');
    }
  };

  return (
    <div className="login-form-container">
        <Link to="/"></Link>
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="username">Usuario:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [rollNo, setRollNo] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Here you can implement your login logic
    // For simplicity, this example just logs the login details
    console.log('Logged In:', { rollNo, password });
    alert('Logged Successfully...')
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label>Roll No:</label>
          <input type="text" value={rollNo} onChange={(e) => setRollNo(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}

export default Login;

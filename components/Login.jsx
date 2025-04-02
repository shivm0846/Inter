// src/Login.js
import React, { useState } from 'react';
import './Login.css'; // Import the CSS file

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        if (!username || !password) {
            setError('Please fill in both fields.');
            return;
        }
        // Simulate a login process
        console.log('Logging in with:', { username, password });
        // Reset form and error
        setUsername('');
        setPassword('');
        setError('');
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label>Username:</label><br />
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label><br />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit">Login</button>
                {/* <h5>New User? <a href="SignIn.jsx">Register</a></h5>
                 */}
            </form>
        </div>
    );
};

export default Login;
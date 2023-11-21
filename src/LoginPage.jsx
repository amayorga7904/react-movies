import React, { useState } from 'react'
import './LoginPage.css'

export default function LoginPage({ onLogin }) {
    const [username, setUsername] = useState('')

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ensure username is defined before calling onLogin
        if (username.trim() !== '') {
          onLogin(username);
        }
    };

    return (
        <div className="full-screen-container">
          <div className="login-container">
            <h2 className="login-title">Login Please</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label>
                  Username:
                </label>
                <input type="text" value={username} onChange={handleUsernameChange} />
              </div>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      );
    };

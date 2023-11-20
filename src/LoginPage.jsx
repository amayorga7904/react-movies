import React, { useState } from 'react'

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
        <div>
          <h2>Login Page</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Username:
              <input type="text" value={username} onChange={handleUsernameChange} />
            </label>
            <button type="submit">Login</button>
          </form>
        </div>
      );
    };

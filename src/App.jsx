import { useState } from 'react'
import LoginPage from './LoginPage';

import './App.css'

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user}!</h2>
          {/* Other content for authenticated user */}
        </div>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App

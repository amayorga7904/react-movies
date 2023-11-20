import React, { useState } from 'react'
import LoginPage from './LoginPage';
import NavBar from './NavBar';
import ActorListPage from './ActorListPage';
import MoviesListPage from './MoviesListPage';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieDetailPage from './MovieDetailPage';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  return (
    <Router>
      <div>
        {user ? (
          <div>
            <NavBar user={ user } />
            <Routes>
              <Route path='/' element={<MoviesListPage />} />
              <Route path='/movies/:movieName' element={<MovieDetailPage />} />
              <Route path='/actors' element={<ActorListPage />} />
            </Routes>
          </div>
        ) : (
          <LoginPage onLogin={handleLogin} />
        )}
      </div>
    </Router>
  );
};

export default App

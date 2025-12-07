import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { useEffect } from 'react';

import './App.css'

import HomePage from './pages/homePage'
import ProfilePage from './pages/profilePage'
import FindTeammatesPage from './findteammates/FindTeammatesPage'
import PlayerProfilePage from './pages/PlayerProfilePage'
import KnowledgeHubPage from './pages/KnowledgeHubPage'
import Login from './pages/login'
import Signup from './pages/signup'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function OAuthHandler({ children }) {
  useEffect(() => {
    // Check for OAuth callback parameters in URL
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    const name = params.get('name');
    const email = params.get('email');

    if (token && name && email) {
      // Store token and user data
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify({
        name: decodeURIComponent(name),
        email: decodeURIComponent(email)
      }));

      // Dispatch event to notify navbar
      window.dispatchEvent(new Event('storage'));

      // Clean up URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  return children;
}

function App() {

  return (
    <Router>
      <OAuthHandler>
        <Routes>
          <Route path="/" element={<><Navbar /><HomePage /><Footer /></>} />
          <Route path="/profile" element={<><Navbar /><ProfilePage /></>} />
          <Route path="/find-players" element={<><Navbar /><FindTeammatesPage /><Footer /></>} />
          <Route path="/player/:id" element={<><Navbar /><PlayerProfilePage /><Footer /></>} />
          <Route path="/knowledge" element={<><Navbar /><KnowledgeHubPage /><Footer /></>} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </OAuthHandler>
    </Router>
  )
}

export default App;

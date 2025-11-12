import { BrowserRouter as Router,Routes,Route, useLocation } from 'react-router-dom';

import './App.css'
import Navbar from './components/navbar'
import Homepage from './pages/homepage'
import Login from './pages/login'
import Signup from './pages/signup'

function AppContent() {
  const location = useLocation();
  const hideNavbarRoutes = ['/login', '/signup'];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

function App() {

  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App

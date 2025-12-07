import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import './App.css'

import HomePage from './pages/homePage'
import ProfilePage from './pages/profilePage'
import Login from './pages/login'
import Signup from './pages/signup'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Navbar /><HomePage /><Footer /></>} />
        <Route path="/profile" element={<><Navbar /><ProfilePage /></>} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App;

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import './App.css'
import Navbar from './components/navbar'
import Homepage from './pages/homepage'
import Login from './pages/login'
import Signup from './pages/signup'


function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App

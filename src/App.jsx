import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import './App.css'
import HomePage from './pages/homePage'
import Login from './pages/login'
import Signup from './pages/signup'
import Navbar from './components/Navbar'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Navbar /><HomePage /></>} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App;

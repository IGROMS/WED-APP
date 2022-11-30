import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Auth/login/Login';
import Register from './screens/Auth/register/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;

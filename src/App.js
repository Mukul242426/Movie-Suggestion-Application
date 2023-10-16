import './App.css';
import Register from './Components/Register'
import Home from './Components/Home'
import Profile from './Components/Profile'
import Browse from './Components/Browse'
import {Routes,Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
    <ToastContainer/>
    <Routes>
      <Route path="/" element={<Register/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/browse" element={<Browse/>}/>
    </Routes>
    </>
  );
}

export default App;

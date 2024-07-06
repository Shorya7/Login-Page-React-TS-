import { Route, Routes } from 'react-router-dom';
import Login from '../pages/register/Login';
import Home from '../pages/home/Home';
import ProtectedRoute from './ProtectedRoute';

const Routers = () => {
  return (
      <Routes>
       <Route path="/login" element={<Login/>} />
       <Route path='/' element = {<ProtectedRoute Component={Home} />} />
     </Routes>
  )
}

export default Routers;
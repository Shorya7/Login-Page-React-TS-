import React, {useEffect} from 'react';
import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';

interface ProtectedRouteProps {
  Component: React.ComponentType;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ Component }) => {
  const userDetails = localStorage.getItem('userDetails');
  useEffect(()=>{
    if(!userDetails){
      toast.error('Uh-oh! Just enter your details first and see the magic');
    }
  },[userDetails])
  if (!userDetails) {
    return <Navigate to="/login" />;
  }

  return <Component />;
};

export default ProtectedRoute;

import React from 'react';
import {  Navigate } from 'react-router-dom';
import Form from '../../components/Form';

const Login:React.FC = () => {
  
const userDetails:string | null = localStorage.getItem('userDetails');

  if (userDetails) {
    return <Navigate to="/" />;
  }
  return (
    <>
    <Form/>
    </>
  );
};

export default Login;

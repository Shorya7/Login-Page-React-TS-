import React from 'react';
import { Toaster } from 'react-hot-toast';
interface ParentComponentProps {
    children: React.ReactNode;
  }
  
const ToasterProvider: React.FC<ParentComponentProps> = ({ children }) => {
  return (
    <>
      <Toaster position="top-center"  reverseOrder={false} toastOptions={{
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
          success:{
            duration: 8000,
          }
        }}/>
      {children}
    </>
  );
};

export default ToasterProvider;

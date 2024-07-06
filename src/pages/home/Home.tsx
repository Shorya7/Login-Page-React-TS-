import React from 'react';

const Home: React.FC = () => {
  const userDetails: string|null= localStorage.getItem('userDetails');
  const user = userDetails ? JSON.parse(userDetails) : null;
  return (
    <div style={{textAlign: 'center'}}>
        <h1>Hello, {user.name}!</h1>
    </div>
  )
}

export default Home;
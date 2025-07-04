import React from 'react';

function MyComponent() {
  return (
    <img 
      src={process.env.PUBLIC_URL + '/Images/bashapic.png'} 
      alt="Basha" 
      style={{ width: '300px' }} // Optional styling
    />
  );
}

export default MyComponent;
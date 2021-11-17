import React from 'react';

const Unauthorised = () => {
  return (
    <div style={{ paddingTop: '10%', textAlign: 'center' }}>
      <h1
        style={{ textAlign: 'center', color: '#0414a7', marginBottom: '50px' }}
      >
        <span style={{ background: '#aaaaaa', padding: '0 15px 2px' }}>
          Unauthorised
        </span>
      </h1>
      <p>You tried to access /admin without login in.</p>
      <p>
        <a href="/login">Click here to login</a>
      </p>
    </div>
  );
};

export default Unauthorised;

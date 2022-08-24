import React from 'react';

type Props = {};

export const Login = (props: Props) => {
  return (
    <div
      className="p-2 flex flex-col items-center justify-center"
      style={{ height: 'calc(100vh - 100px' }}
    >
      <div className="prose text-center w-full">
        <h2>Connexion</h2>
      </div>
      <button className="btn">Se connecter avec Gmail</button>
      <button className="btn">Se connecter avec Facebook</button>
      <button className="btn">Se connecter avec Twitter</button>
    </div>
  );
};

export default Login;

import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import http from '../http';
import Context from '../context/context';
import { updateFunctionTypeNode } from 'typescript';

const Registration = () => {
  const { setOpenModal, setIsLoginUser } = useContext(Context);
  const path = useLocation();
  const isLogin = path.pathname === '/login';
  const [login, setLogin] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');
  const authorization = async () => {
    const data = { email: login, password: password };
    const authorizationData = await http.post(
      `https://reqres.in/api/${isLogin ? 'login' : 'registration'}`,
      data
    );
    if (authorizationData.data.token) {
      localStorage.setItem('token', authorizationData.data.token);
      setIsLoginUser(true);
      setOpenModal(false);
    }
    if (authorizationData.data.email) {
      alert('Congratulation, you are awesome!');
      setLogin('');
      setPassword('');
    }
  };
  return (
    <div className="row">
      <input
        className="mt-3 form-control"
        placeholder="Input value"
        value={login}
        onChange={(event) => setLogin(event.target.value)}
      />
      <input
        className="mt-3 form-control"
        placeholder="Input password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      {isLogin ? (
        <div>
          <Link to="registration">Don't have a account? Registration!</Link>
        </div>
      ) : (
        <div>
          <Link to="login">Have a account? Login!</Link>
        </div>
      )}
      <button className=" mt-2 btn btn-primary" onClick={() => authorization()}>
        {isLogin ? 'Log In' : 'Registration'}
      </button>
    </div>
  );
};

export default Registration;

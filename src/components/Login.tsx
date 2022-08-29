import React from 'react';

const Login = () => {
  return (
    <form>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Login
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Login"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <span className="input-group-text" id="basic-addon1">
          Password
        </span>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
    </form>
  );
};

export default Login;

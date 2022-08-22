import React from 'react';
type LoaderProps = {
  color?: string;
};
const Loader = ({ color = 'text-primary' }: LoaderProps) => {
  return (
    <div className="d-flex justify-content-center w-100">
      <div className={`spinner-border ${color}`} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;

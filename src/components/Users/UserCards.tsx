import React from 'react';
import Loader from '../loader';
import { IUser } from './IUser';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelectors';

const UserCards = () => {
  const { users, status } = useTypedSelector((state) => state.users);
  const { deleteUser } = useAction();

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {users.length ? (
        users.map((user) => (
          <div className="col" key={user.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{`#${user.id} - ${user.name}`}</h5>
                <p className="card-text">E-mail: {user.email}</p>
                <p className="card-text">Phone: {user.phone}</p>
                <p className="card-text">WebSite: {user.website}</p>
              </div>
              <div className="card-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default UserCards;

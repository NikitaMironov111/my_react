import React, {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from 'react';
import http from '../../http';
import { IUser } from './IUser';
import { initialUser } from './initialUser';
const UserAddForm = ({
  setUsers,
  users,
}: {
  setUsers: Dispatch<SetStateAction<IUser[]>>;
  users: IUser[];
}) => {
  const [user, setUser] = useState(initialUser);
  const onChangeUserData = (event: ChangeEvent<HTMLInputElement>) => {
    const field = event.target.id;
    setUser({ ...user, [field]: event.target.value });
  };

  const addUser = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const addedUser = await http.post('users', user);
      if (addedUser.data) {
        setUsers([...users, user]);
        setUser(initialUser);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form onSubmit={(event) => addUser(event)}>
      {Object.keys(user).map((field) => {
        if (
          field === 'id' ||
          field === 'address' ||
          field === 'company' ||
          field === 'username'
        )
          return;
        return (
          <div className="mb-3" key={field}>
            <label htmlFor={field} className="form-label">
              {field}
            </label>
            <input
              type="text"
              className="form-control"
              id={field}
              required
              value={
                user[
                  field as keyof Omit<
                    IUser,
                    'id' | 'address' | 'company' | 'username'
                  >
                ]
              }
              onChange={(event) => onChangeUserData(event)}
            />
          </div>
        );
      })}

      <button type="submit" className="btn btn-primary mb-2">
        Add
      </button>
    </form>
  );
};

export default UserAddForm;

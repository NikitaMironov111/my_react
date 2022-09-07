import React, {
  ChangeEvent,
  FC,
  useState,
  useMemo,
  FormEvent,
  useEffect,
} from 'react';
import { IUser } from '../components/Users/IUser';
import http from '../http';
import UserCards from '../components/Users/UserCards';
import UserAddForm from '../components/Users/UserAddForm';
import Search from '../components/Search';
import { useSearch } from '../hooks/useSearch';
import { useAction } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelectors';
const Users: FC = () => {
  const { users } = useTypedSelector((state) => state.users);

  const [showUserForm, setShowUserForm] = useState(false);
  const [btnName, setBtnName] = useState('Add new User');
  const [search, setSearch] = useState('');
  const { getUsers } = useAction();

  useEffect(() => {
    getUsers();
  }, []);
  // if deps not used rerender on every change state
  // if deps empty - rerender on first load
  // if deps state - rerender on change this state
  // if in useEffect used return - unmount

  const searchedUsers = useSearch(users, 'name', search);

  return (
    <>
      <Search setSearch={setSearch} />
      <button
        className="btn btn-success mt-3 mb-3"
        onClick={() => {
          setShowUserForm(!showUserForm);
        }}
      >
        {btnName}
      </button>
      {/* {showUserForm && <UserAddForm setUsers={setUsers} users={users} />} */}
      <UserCards />
    </>
  );
};

export default Users;

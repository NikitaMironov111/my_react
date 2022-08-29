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

const Users: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [showUserForm, setShowUserForm] = useState(false);
  const [btnName, setBtnName] = useState('Add new User');
  const [search, setSearch] = useState('');

  useEffect(() => {
    getUser();
  }, []);
  // if deps not used rerender on every change state
  // if deps empty - rerender on first load
  // if deps state - rerender on change this state
  // if in useEffect used return - unmount

  const getUser = async () => {
    try {
      const users = await http.get('users');
      setUsers(users.data);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteUser = async (id: number) => {
    const isDelete = window.confirm('Do you want realy delete?');
    if (isDelete) {
      const deletedUser = await http.delete(`users/${id}`);
      if (deletedUser.status == 200) {
        setUsers(users.filter((user) => user.id !== id));
      }
    }
  };

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
      {showUserForm && <UserAddForm setUsers={setUsers} users={users} />}
      <UserCards users={searchedUsers} deleteUser={deleteUser} />
    </>
  );
};

export default Users;

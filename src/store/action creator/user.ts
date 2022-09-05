import { Dispatch } from 'redux';
import http from '../../http';
import { UsersAction, UserActionType } from '../types/user';

export const getUsers = () => {
  return async (dispatch: Dispatch<UsersAction>) => {
    const response = await http.get('users');
    dispatch({ type: UserActionType.GET_USERS, payload: response.data });
  };
};

export const deleteUsers = async (id: number) => {
  return async (dispatch: Dispatch<UsersAction>) => {
    const response = await http.delete(`users/${id}`);
    const isDelete = window.confirm('Do you want realy delete?');
    if (isDelete) {
      dispatch({ type: UserActionType.DELETE_USER, payload: response.status });
    }
  };
};

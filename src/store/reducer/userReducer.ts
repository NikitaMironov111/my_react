import { UserState, UsersAction, UserActionType } from '../types/user';
const initialState: UserState = {
  users: [],
  status: 0,
  userId: 0,
};

export const usersReducer = (
  state = initialState,
  action: UsersAction
): UserState => {
  switch (action.type) {
    case UserActionType.GET_USERS:
      return { users: action.payload };
    case UserActionType.DELETE_USER:
      const users = state.users.filter((user) => user.id !== state.userId);
      return { users: users, status: action.payload };
    default:
      return state;
  }
};

import { UserState, UsersAction, UserActionType } from '../types/user';
const initialState: UserState = {
  users: [],
};

export const usersReducer = (
  state = initialState,
  action: UsersAction
): UserState => {
  switch (action.type) {
    case UserActionType.GET_USERS:
      return { users: action.payload };
    case UserActionType.DELETE_USER:
      return { users: state.users.filter((user) => user.id !== action.payload.id) };
    default:
      return state;
  }
};

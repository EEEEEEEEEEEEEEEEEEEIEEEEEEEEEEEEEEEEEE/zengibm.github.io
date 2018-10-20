const USER_NAME: string = "USER_NAME";
const USER_PWD: string = "USER_PWD";

interface User {
  user: string;
  pwd: string;
  isAuth: boolean;
}
interface Action {
  type: string;
}

const initState: User = {
  user: "cat",
  pwd: "123",
  isAuth: false
};

function user(state = initState, action: Action) {
  switch (action.type) {
    case USER_NAME:
    case USER_PWD:
    default:
      return state;
  }
}

export { user };

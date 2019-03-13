const ROUTER = "ROUTER";

function changeRedirectUrlSuccess(data) {
  return { type: ROUTER, payload: { loginRedirectUrl: data, msg: "ckckk" } };
}

const initState = {
  isLogin: false,
  loginRedirectUrl: ""
};

function authStore(state = initState, action) {
  switch (action.type) {
    case ROUTER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

function setLoginRedirectUrl(data) {
  return async dispatch => {
    dispatch(changeRedirectUrlSuccess(data));
  };
}

function login() {
  return async dispath => {
    dispath();
  };
}

export { authStore, setLoginRedirectUrl, login };

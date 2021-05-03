export default function (state = { status: {},loginStatus: {}, isLoading: false }, action) {
    switch (action.type) {
      case "SIGNING_UP_START":
        return { status: {}, isLoading: true };
      case "SIGNING_UP_SUCCESS":
        return { status: action.payload, error: {}, isLoading: false };
      case "SIGNING_UP_FAILURE":
        return { ...state, status: action.payload, isLoading: false };
        case "LOGIN_START":
          return { loginStatus: {}, isLoading: true };
        case "LOGIN_SUCCESS":
          return { loginStatus: action.payload, error: {}, isLoading: false };
        case "LOGIN_FAILURE":
          return { ...state, loginStatus: action.payload, isLoading: false };
      default:
        return state;
    }
  };
  
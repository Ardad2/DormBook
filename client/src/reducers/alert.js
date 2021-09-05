import { SET_ALERT, REMOVE_ALERT, USER_LOADED, REGISTER_SUCCESS, REGISTER_FAIL} from "../actions/types";

const initialState = [];

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED: 
    return {
      ...state,
      isAuthenticated: true,
      loading: false,
      user: payload
    }
    case REGISTER_SUCCESS:
      localStorage.setItem("token", payload.token)
      return {
        ...state, 
        ...payload,
        isAuthenticated: true,
        loading: false
      };
      case REGISTER_FAIL:
        localStorage.removeItem('token');
        return {
          ...state,
          token: null, 
          isAuthenticated: false,
          loading: false
        }
    case SET_ALERT:
      return [...state, payload]; //Add new alert to already exisitng alerts (state)
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}

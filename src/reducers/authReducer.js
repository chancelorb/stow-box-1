import { AUTH_SUCCESS, AUTH_FAILURE } from '../actions/AuthActions';

const initialState = {
  web3: null,
  stow: null,
  ipfs: null,
  isAuthenticated: false,
  authError: '',
};

const stowReducer = (state = initialState, action) => {
  if (action.type === AUTH_SUCCESS) {

    /*
      On success, we make the services available to our app state.
    */

    const { web3, ipfs, stow } = action;
    const isAuthenticated = true;

    return Object.assign({}, state, {
      web3,
      ipfs,
      stow,
      isAuthenticated,
    });
  } else if (action.type === AUTH_FAILURE) {

    /*
      On failure, we return an authentication error which locks down the app and displays
      the AuthError component
    */

    const { authError, isAuthenticated } = action;
    return Object.assign({}, state, { authError, isAuthenticated });
  }

  return state;
};

export default stowReducer;

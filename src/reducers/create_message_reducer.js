import { NEW_MESSAGE } from "../actions";

const createMessageReducer = (state, action) => {
  if (state === undefined) {
    return null;
  }

  switch (action.type) {
    case NEW_MESSAGE:
      const copiedState = state.slice(0);
      copiedState.push(action.payload);
      return copiedState;
    default:
      return state;
  }
}

export default createMessageReducer;

import { UPLOAD_USER_ID } from "../actions";

const initialState = {
  userId: "",
};

const userIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_USER_ID:
      return {
        userId: action.payload,
      };

    default:
      return state;
  }
};

export default userIdReducer;

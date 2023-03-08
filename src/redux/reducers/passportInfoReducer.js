import { EDIT_PASSPORT_INFO } from "../actions";

const initialState = {
  citizenship: "",
  passportNum: "",
  passportPhoto: null,
};

const passportInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_PASSPORT_INFO:
      return {
        citizenship: action.payload.citizenship,
        passportNum: action.payload.passportNum,
        passportPhoto: action.payload.passportPhoto,
      };

    default:
      return state;
  }
};

export default passportInfoReducer;

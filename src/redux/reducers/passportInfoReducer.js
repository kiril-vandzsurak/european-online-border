import { EDIT_PASSPORT_INFO } from "../actions";

const initialState = {
  nationality: "",
  passportNum: "",
  passportPhoto: null,
};

const passportInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_PASSPORT_INFO:
      return {
        nationality: action.payload.nationality,
        passportNum: action.payload.passportNum,
        passportPhoto: action.payload.passportPhoto,
      };

    default:
      return state;
  }
};

export default passportInfoReducer;

import { EDIT_PASSPORT_INFO, UPLOAD_IMAGE_SUCCESS } from "../actions";

const initialState = {
  nationality: "",
  passportNum: "",
  passportPhoto: null,
};

const passportInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_PASSPORT_INFO:
      return {
        ...state,
        nationality: action.payload.nationality,
        passportNum: action.payload.passportNum,
      };

    case UPLOAD_IMAGE_SUCCESS:
      return {
        passportPhoto: action.payload,
      };

    default:
      return state;
  }
};

export default passportInfoReducer;

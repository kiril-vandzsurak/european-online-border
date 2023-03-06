import { EDIT_PERSONAL_INFO } from "../actions";

const initialState = {
  searchQuerry: {
    name: "",
    surname: "",
    birthDate: new Date(),
  },
};

const personalInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_PERSONAL_INFO:
      return {
        searchQuerry: {
          name: action.payload.name,
          surname: action.payload.surname,
          birthDate: action.payload.birthDate,
        },
      };

    default:
      return state;
  }
};

export default personalInfoReducer;

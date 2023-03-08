export const EDIT_PERSONAL_INFO = "EDIT_PERSONAL_INFO";
export const EDIT_PASSPORT_INFO = "EDIT_PASSPORT_INFO";

export const editPersonalInfo = (name, surname, birthDate) => {
  return {
    type: EDIT_PERSONAL_INFO,
    payload: {
      name,
      surname,
      birthDate,
    },
  };
};

export const editPassportInfo = (citizenship, passportNum, passportPhoto) => {
  return {
    type: EDIT_PASSPORT_INFO,
    payload: {
      citizenship,
      passportNum,
      passportPhoto,
    },
  };
};

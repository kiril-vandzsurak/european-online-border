export const EDIT_PERSONAL_INFO = "EDIT_PERSONAL_INFO";

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

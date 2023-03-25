export const EDIT_PERSONAL_INFO = "EDIT_PERSONAL_INFO";
export const EDIT_PASSPORT_INFO = "EDIT_PASSPORT_INFO";
export const UPLOAD_IMAGE_SUCCESS = "UPLOAD_IMAGE_SUCCESS";
export const UPLOAD_USER_ID = "UPLOAD_USER_ID";

export const personalInfo = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3001/users/me", {
        headers: {
          Authorization: `Bearer ` + localStorage.getItem("token"),
        },
      });
      const user = await response.json();
      const { name, surname, birthDate } = user;
      dispatch({
        type: EDIT_PERSONAL_INFO,
        payload: {
          name,
          surname,
          birthDate,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const editPersonalInfo = (name, surname, birthDate) => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3001/users/me", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          name,
          surname,
          birthDate,
        }),
      });
      const user = await response.json();
      dispatch({
        type: EDIT_PERSONAL_INFO,
        payload: {
          name: user.name,
          surname: user.surname,
          birthDate: user.birthDate,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const passportInfo = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3001/users/me", {
        headers: {
          Authorization: `Bearer ` + localStorage.getItem("token"),
        },
      });
      const user = await response.json();
      const { passportNum, nationality, passportPhoto } = user;
      dispatch({
        type: EDIT_PASSPORT_INFO,
        payload: {
          nationality,
          passportNum,
          passportPhoto,
        },
      });
      console.log(nationality);
    } catch (error) {
      console.error(error);
    }
  };
};

export const editPassportInfo = (nationality, passportNum, passportPhoto) => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3001/users/me", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          nationality,
          passportNum,
          passportPhoto,
        }),
      });
      const user = await response.json();
      dispatch({
        type: EDIT_PASSPORT_INFO,
        payload: {
          nationality: user.nationality,
          passportNum: user.passportNum,
          passportPhoto: user.passportPhoto,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const uploadPassportPhoto = (userId, imageData) => {
  return async (dispatch) => {
    try {
      const photo = new FormData();
      photo.append("passportPhoto", imageData);

      const response = await fetch(
        `http://localhost:3001/users/me/${userId}/photo`,
        {
          method: "POST",
          body: photo,
        }
      );

      const data = await response.json();
      console.log(data);
      const passportPhoto = {
        fileName: data.fileName,
        data: data.data,
      };

      dispatch({
        type: UPLOAD_IMAGE_SUCCESS,
        payload: passportPhoto,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const EDIT_PERSONAL_INFO = "EDIT_PERSONAL_INFO";
export const EDIT_PASSPORT_INFO = "EDIT_PASSPORT_INFO";
export const UPLOAD_IMAGE_SUCCESS = "UPLOAD_IMAGE_SUCCESS";

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

// const formData = new FormData();
// if (userPassportPhoto) {
//   formData.append("file", userPassportPhoto);
// }

// export const uploadPassportPhoto = async (userId, passportPhoto) => {
//   return async (dispatch) => {
//     try {
//       const formData = new FormData();
//       formData.append("passportPhoto", passportPhoto);
//       const response = await fetch(
//         `http://localhost:3001/users/me/${userId}/photo`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//           body: formData,
//         }
//       );
//       if (!response.ok) {
//         throw new Error("Failed to upload passport photo");
//       }
//       const user = await response.json();
//       dispatch({
//         type: EDIT_PASSPORT_PHOTO,
//         payload: { passportPhoto: user.passportPhoto },
//       });
//       return "Passport photo uploaded successfully!";
//     } catch (error) {
//       console.error(error);
//       throw new Error("Failed to upload passport photo");
//     }
//   };
// };

// export const uploadPassportPhoto = (userId, imageData) => {
//   return async (dispatch) => {
//     try {
//       const formData = new FormData();
//       formData.append("passportPhoto", imageData);

//       const response = await fetch(
//         `http://localhost:3001/users/me/${userId}/photo`,
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       const passportPhoto = await response.text();
//       console.log(passportPhoto);
//       dispatch({
//         type: UPLOAD_IMAGE_SUCCESS,
//         payload: passportPhoto,
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   };
// };

export const uploadPassportPhoto = (userId, imageData) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append("passportPhoto", imageData);

      const response = await fetch(
        `http://localhost:3001/users/me/${userId}/photo`,
        {
          method: "POST",
          body: formData,
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

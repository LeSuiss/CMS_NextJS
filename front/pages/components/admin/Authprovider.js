import Axios from "axios";
import { useRedirect } from "react-admin";

const bcrypt = require("bcryptjs");

export default {
  // called when the user attempts to log in
  login: async ({ username, password }) => {
    let result = false;
    await Axios.post(process.env.DB_URL + "/admin/login", {
      username,
      password,
    })
      .then((response) => {
        if (!!response.data.isAuth) {
          result = true;
          return localStorage.setItem("jwt_token", response.data.jwt_token);
        }
      })
      .catch((err) => console.log(err));

    return result
      ? Promise.resolve()
      : Promise.reject({
          message: "le compte est inconnu ou le mot de passe est erroné",
        });
  },
  // called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem("jwt_token");
    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("jwt_token");
      return Promise.reject({ redirectTo: "/" });
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: async () => {
    const token = localStorage.getItem("jwt_token");
    if (!!!token) {
      return Promise.reject({ message: "merci de vous authentifier" });
    } else {
      let result;
      await Axios.post(process.env.DB_URL + "/admin/checkAuth", {
        jwt_token: localStorage.getItem("jwt_token"),
      })
        .then((response) => {
          result = response.data;
          if (!!result.isAuth) {
            return Promise.resolve();
          } else {
            localStorage.removeItem("jwt_token");
            return Promise.reject({ redirectTo: "/" });
          }
        })
        .catch((err) => console.log(err));
    }
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
};

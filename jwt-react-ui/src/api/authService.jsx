import axios from "axios";

const API_URL = "http://localhost:8081/api/auth";

export const signup = (user) => {
  return axios.post(`${API_URL}/signup`, user);
};

export const login = async (user) => {
  const response = await axios.post(`${API_URL}/login`, user);

  // ✅ STORE TOKEN
  localStorage.setItem("token", response.data.token);

  return response;
};

// export const getHome = () => {
//   const token = localStorage.getItem("token");

//   return axios.get("http://localhost:8081/api/home", {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };


// const API_URL = "http://localhost:8081/api";
export const getHome = () => {
  const token = localStorage.getItem("token");
  return axios.get(`${API_URL}/home`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
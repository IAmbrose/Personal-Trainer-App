import axios from "axios";

const BASE_URL = "/api/users";
const LOGIN_URL = "/api/users/login";

export async function signUp(userData) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid Sign Up");
  }
}

export async function login(userData) {
  const res = await fetch(LOGIN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid Sign Up");
  }
}

export function checkToken() {
  const token = localStorage.getItem("token");
  return axios.get("/api/users/check-token", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

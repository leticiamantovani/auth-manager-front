import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", 
});

export function login(data) {
  return api.post("/login", data);
}

export function register(data) {
  return api.post("/register", data);
}

export function resetPassword(data) {
  return api.post("/reset-password", data);
}

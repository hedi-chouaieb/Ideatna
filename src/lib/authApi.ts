import axios from "axios";

export const loginApi = async (email: string, password: string) => {
  // Replace with your real API endpoint
  const { data } = await axios.post("/api/auth/login", { email, password });
  return data;
};

export const registerApi = async (payload: { name: string; email: string; password: string; role: "buyer" | "artisan" }) => {
  // Replace with your real API endpoint
  const { data } = await axios.post("/api/auth/register", payload);
  return data;
};

export const logoutApi = async () => {
  // Replace with your real API endpoint
  await axios.post("/api/auth/logout");
};

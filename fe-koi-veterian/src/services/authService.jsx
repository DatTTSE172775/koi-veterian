import apiClient from "./axios";

export const login = async (credentials) => {
  const response = await apiClient.post("/auth/login", credentials);
  return response.data;
};

export const register = async (userData) => {
  try {
    const response = await apiClient.post("/auth/register", userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const forgetPassword = async (email) => {
  const response = await apiClient.post("/auth/forget-password", { email });
  return response.data;
};

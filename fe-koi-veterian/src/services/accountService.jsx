import apiClient from "./axios";

// API call to fetch account details by username
export const fetchAccountByUsername = async (username) => {
  const response = await apiClient.get(`/account/findbyusername`, {
    params: { userName: username },
  });
  return response.data;
};

// API call to fetch available veterinarians based on date and shift
export const fetchAvailableVeterinarians = async (date, shiftId) => {
  const response = await apiClient.get("/account/available", {
    params: { date, shiftId },
  });
  return response.data;
};

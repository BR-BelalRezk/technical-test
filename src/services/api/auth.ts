import api from "..";

export interface RegisterData {
  name: string;
  email: string;
  mobile: string;
  password: string;
  password_confirmation: string;
  mobile_country_code: string;
}

export interface LoginData {
  email: string;
  password: string;
}

// REGISTER
export const register = (data: RegisterData) => {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value);
  });
  return api.post("/auth/register", formData);
};

// LOGIN
export const login = (data: LoginData) => {
  const formData = new FormData();
  formData.append("email", data.email);
  formData.append("password", data.password);
  return api.post("/auth/login", formData);
};

// VERIFY ACCOUNT
export const verifyAccount = (code: string) => {
  const formData = new FormData();
  formData.append("code", code);
  return api.post("/auth/verify-email", formData);
};

// RESEND CODE
export const resendVerificationCode = () =>
  api.post("/auth/verify-email/resend-code", new FormData());

// USER DATA
export const getUserData = () => api.get("/auth/user-data");

// LOGOUT
export const logout = () => api.post("/auth/logout", new FormData());

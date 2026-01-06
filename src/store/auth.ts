import { create } from "zustand";
import { setAuthCookie, deleteAuthCookie } from "@/services/actions";

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  setAuth: (token: string, user: User) => Promise<void>;
  clearAuth: () => Promise<void>;
  setUser: (user: User) => void;
  initAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: true,

  setAuth: async (token, user) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("token", token);
    }
    await setAuthCookie(token);
    set({
      token,
      user,
      isAuthenticated: true,
      isLoading: false,
    });
  },

  clearAuth: async () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
    }

    await deleteAuthCookie();

    set({
      token: null,
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
  },

  setUser: (user) => {
    set({ user });
  },

  initAuth: () => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        set({
          token,
          isAuthenticated: true,
          isLoading: false,
        });
      } else {
        set({ isLoading: false });
      }
    }
  },
}));

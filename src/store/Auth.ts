import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

interface Auth {
  isAuthenticated: boolean;
  token: string;
  is_admin: boolean;
  email: string;
  setAuthentication: (data: boolean) => void;
  setUser: (data: { email: string; is_admin: boolean }) => void;
  setToken: (token: string) => void;
  reset: () => void;
}

const initialState = {
  isAuthenticated: false,
  token: "",
  email: "",
  is_admin: false,
};

export const useAuthentication = create<Auth>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        setAuthentication: (data) => set(() => ({ isAuthenticated: data })),
        setUser: (data) =>
          set(() => ({ email: data.email, is_admin: data.is_admin })),
        setToken: (token) =>
          set(() => ({
            token: token,
          })),
        reset: () => {
          set(initialState);
          localStorage.removeItem("token");
        },
      }),
      {
        name: "auth-data",
      }
    )
  )
);

// export const useAuthentication = create<Auth>((set) => ({
//   isAuthenticated: false,
//   setAuthentication: (data) => set(() => ({ isAuthenticated: data })),
// }));

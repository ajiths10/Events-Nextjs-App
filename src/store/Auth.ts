import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

interface Auth {
  isAuthenticated: boolean;
  token: string;
  setAuthentication: (data: boolean) => void;
  setToken: (token: string) => void;
  reset: () => void;
}

const initialState = {
  isAuthenticated: false,
  token: "",
};

export const useAuthentication = create<Auth>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        setAuthentication: (data) => set(() => ({ isAuthenticated: data })),
        setToken: (token) =>
          set(() => ({
            token: token,
          })),
        reset: () => set(initialState),
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

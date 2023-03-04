import { request } from "@/util/axios-util";
import { useMutation } from "@tanstack/react-query";

const loginReq = (data: any) => {
  return request({ url: "/auth/login", method: "post", data: data });
};

export const useUserLogin = () => {
  return useMutation({
    mutationFn: loginReq,
    onSuccess: (data) => {
      localStorage.setItem("token", data.data.data.token);
    },
    onError: () => {
      console.log("Error");
    },
  });
};

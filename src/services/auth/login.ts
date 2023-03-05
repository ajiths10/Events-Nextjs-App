import { request } from "@/util/axios-util";
import { useMutation } from "@tanstack/react-query";

const loginReq = (data: any) => {
  return request({ url: "/auth/login", method: "post", data: data.values });
};

export const useUserLogin = () => {
  return useMutation({
    mutationFn: loginReq,
    onSuccess: (data, variables, context) => {
      if (data?.data?.status) {
        localStorage.setItem("token", data.data.data.token);
        variables.onSuccessHandle(data.data.data);
      }
    },
    onError: () => {
      console.log("Error");
    },
  });
};

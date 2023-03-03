import { request } from "@/util/axios-util";
import { useMutation } from "@tanstack/react-query";

const signupRes = async (data: any) => {
  return request({ url: "/user", method: "post", data });
};

export const usePostSignup = () => {
  return useMutation({
    mutationFn: signupRes,
  });
};

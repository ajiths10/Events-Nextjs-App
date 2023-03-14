import { request } from "@/util/axios-util";
import { useMutation } from "@tanstack/react-query";

const signupRes = async (data: any) => {
  console.log(data);
  return request({ url: "/user", method: "post", data: { ...data } });
};

export const usePostSignup = () => {
  return useMutation({
    mutationFn: signupRes,
  });
};

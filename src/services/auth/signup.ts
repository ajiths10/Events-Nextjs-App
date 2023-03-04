import { request } from "@/util/axios-util";
import { useMutation } from "@tanstack/react-query";

const signupRes = async (data: any) => {
  console.log(data);
  return request({ url: "/user", method: "post", data: data.values });
};

export const usePostSignup = () => {
  return useMutation({
    mutationFn: signupRes,
    onSuccess(data, variables, context) {
      console.log("data", data);
      console.log("variables", variables);
      console.log("context", context);
      if (data?.data?.status) {
        variables.handleRedirection();
      }
    },
  });
};

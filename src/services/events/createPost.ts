import { request } from "@/util/axios-util";
import { useMutation } from "@tanstack/react-query";

const EventReq = (data: any) => {
  return request({ url: "/event", method: "post", data: data });
};

export const useCreateEvent = () => {
  return useMutation({
    mutationFn: EventReq,
    onSuccess: (data, variables, context) => {},
    onError: () => {
      console.log("Error");
    },
  });
};

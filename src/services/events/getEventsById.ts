import { request } from "@/util/axios-util";
import { useQuery } from "@tanstack/react-query";

const get = (id: number) => {
  return request({ url: `/event/${id}`, method: "get" });
};

export const useGetEventsById = ({ id }: { id: number }) => {
  return useQuery({
    queryKey: ["get-events-id", id],
    queryFn: () => get(id),
    staleTime: 500000, // 5min keep the data as fresh
  });
};

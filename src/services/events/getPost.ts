import { request } from "@/util/axios-util";
import { useQuery } from "@tanstack/react-query";

interface filter {
  limit: number;
  page: number;
  filter?: any;
}

const get = (data: filter) => {
  return request({ url: "/event/all", method: "post", data: data });
};

export const useGetEvents = (filter: filter) => {
  return useQuery({
    queryKey: ["get-events", filter],
    queryFn: () => get(filter),
    staleTime: 500000, // 5min keep the data as fresh
  });
};

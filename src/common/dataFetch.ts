import { request } from "@/util/axios-util";
import { event } from "./types/event";

export const getAllEvents = async () => {
  try {
    let arr: event[] = [];
    let res = await request({ url: `/events.json`, method: "get" });
    Object.values(res.data).map((buscat) => arr.push(buscat as event));
    return arr;
  } catch (error) {
    console.log(error);
    return [];
  }
};

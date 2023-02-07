import React, { useEffect, useState } from "react";
import { getEventById } from "@/common/commonFunction";
import { useRouter } from "next/router";
import EventDetails from "@/components/events/EventDetails";

interface res {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
}

const EventDetail = () => {
  const router = useRouter();

  const [data, setData] = useState<res | any>([]);

  useEffect(() => {
    if (router.isReady) {
      let res = getEventById(router.query.eventId);
      setData(res);
    }
  }, [router]);

  return (
    <>
      <div className="flex flex-col content-center items-center ">
        <div className="flex flex-col p-5 m-5 border shadow-xl bg-slate-200 text-slate-700  min-w-200 rounded-lg md:min-w-[1200px] md:min-h-[500px] items-center gap-[2rem]">
          <h1 className=" text-4xl font-bold font-sans mt-5 border-b-black">
            Events details
          </h1>
          <EventDetails data={data} />
        </div>
      </div>
    </>
  );
};

export default EventDetail;

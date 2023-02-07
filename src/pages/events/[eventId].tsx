import React, { useEffect, useState } from "react";
import { getEventById } from "@/common/commonFunction";
import { useRouter } from "next/router";
import EventDetails from "@/components/events/EventDetails";
import Link from "next/link";

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
  const router: any = useRouter();

  const [data, setData] = useState<res | any>({});

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

          {Object.keys(data).length ? (
            <EventDetails data={data} />
          ) : (
            <div className="flex flex-col items-center">
              <div className="text-lg font-semibold">
                Event not found | 404 found !
              </div>
              <div className="m-1">
                <Link
                  href="/events"
                  className="bg-slate-600 p-1 px-5 m-5 rounded-md text-white flex items-center justify-center hover:bg-slate-700 "
                >
                  All Events
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default EventDetail;

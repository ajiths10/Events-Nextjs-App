import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import EventList from "@/components/events/EventList";
import { getFilteredEvents } from "@/common/commonFunction";

const FilteredEvents = () => {
  const router: any = useRouter();
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    if (router.isReady) {
      let arr = getFilteredEvents({
        month: Number(router.query.slug[1]),
        year: Number(router.query.slug[0]),
      });

      setData(arr);
    }
  }, [router]);

  return (
    <>
      <div className="flex flex-col content-center items-center ">
        <div className="flex flex-col p-5 m-5 border shadow-xl bg-slate-200 text-slate-700  min-w-200 rounded-lg md:min-w-[1200px] md:min-h-[500px] items-center gap-[2rem]">
          <h1 className=" text-4xl font-bold font-sans mt-5 border-b-black">
            Filtered Events
            <hr />
          </h1>
          {data.length ? (
            <EventList items={data} />
          ) : (
            <div className="text-lg font-semibold">No events</div>
          )}
        </div>
      </div>
    </>
  );
};

export default FilteredEvents;

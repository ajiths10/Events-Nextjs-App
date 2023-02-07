import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import EventList from "@/components/events/EventList";
import { getFilteredEvents } from "@/common/commonFunction";
import Link from "next/link";
import DisplayPanel from "@/components/filterPannel/displayPanel";
interface odj {
  month: number;
  year: number;
}

const FilteredEvents = () => {
  const router: any = useRouter();
  const [data, setData] = useState<any>([]);
  const [paramData, setParamData] = useState<odj>({ month: 0, year: 0 });

  useEffect(() => {
    if (router.isReady) {
      let year = Number(router.query.slug[0]);
      let month = Number(router.query.slug[1]);

      let arr = getFilteredEvents({
        month: month,
        year: year,
      });
      setParamData({ month: month, year: year });
      setData(arr);
    }
  }, [router]);

  return (
    <>
      <div className="flex flex-col content-center items-center ">
        <div className="flex flex-col p-5 m-5 border shadow-xl bg-slate-200 text-slate-700  min-w-200 rounded-lg md:min-w-[1200px] md:min-h-[500px] items-center gap-[2rem]">
          {data.length ? (
            <DisplayPanel month={paramData.month} year={paramData.year} />
          ) : null}
          <h1 className=" text-4xl font-bold font-sans mt-5 border-b-black">
            Filtered Events
            <hr />
          </h1>
          {data.length ? (
            <EventList items={data} />
          ) : (
            <div className="flex flex-col items-center">
              <div className="text-lg font-semibold">No events !</div>
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

export default FilteredEvents;

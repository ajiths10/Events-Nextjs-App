import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import EventList from "@/components/events/EventList";
import { getFilteredEvents } from "@/common/commonFunction";
import Link from "next/link";
import DisplayPanel from "@/components/filterPannel/displayPanel";
import { GetServerSideProps } from "next";
import { event } from "@/common/types/event";

const FilteredEvents = (props: {
  data: event[];
  year: number;
  month: number;
}) => {
  const { data, year, month } = props;

  return (
    <>
      <div className="flex flex-col content-center items-center ">
        <div
          className="flex flex-col p-5 m-5 border shadow-xl bg-slate-200 min-h-screen text-slate-700 rounded-lg 
        items-center gap-[2rem] w-10/12"
        >
          {[]?.length ? <DisplayPanel month={month} year={year} /> : null}
          <h1 className=" text-4xl font-bold font-sans mt-5 border-b-black">
            Filtered Events
            <hr />
          </h1>
          {[]?.length ? (
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

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   try {
//     const { params } = context;
//     let filteredData = params?.slug;
//     if (filteredData) {
//       let year = Number(filteredData[0]);
//       let month = Number(filteredData[1]);
//       let arr = await getFilteredEvents({
//         month: month,
//         year: year,
//       });
//       // if (!arr.length) throw new Error("Data not found!!");
//       return {
//         props: {
//           data: arr,
//           year,
//           month,
//         },
//       };
//     } else {
//       throw new Error("Data not found!!");
//     }
//   } catch (error) {
//     return {
//       notFound: true,
//     };
//   }
// };

export default FilteredEvents;

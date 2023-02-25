import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface datalist {
  data: any;
}

const EventItem: FC<any> = (props: datalist) => {
  const { data } = props;

  return (
    <div
      className="grid lg:grid-cols-12 grid-cols-2 sm:grid-cols-12 m-auto bg-slate-50 text-slate-400 overflow-hidden 
       w-full rounded-lg hover:shadow-xl shadow-sm lg:min-h-[23rem]"
    >
      <div className="col-span-1 lg:col-span-5 sm:col-span-4 ex:col-span-12 bg-slate-400">
        <Image
          src={data.image}
          alt="event image"
          className="object-cover h-full w-full"
          width={200}
          height={400}
        />
      </div>
      <div className="lg:col-span-7 col-span-1 sm:col-span-8 ex:col-span-12 flex flex-col w-full p-5">
        <div className="relative font-mono h-full flex flex-col justify-around gap-2">
          <div className="mt-5">
            <h2 className=" text-2xl font-bold text-slate-600">{data.title}</h2>
            <span className="text-xs">{data.date}</span>
          </div>
          <div className="text-sm text-slate-500">
            <span> {data.description}</span>
          </div>
          <div className="text-xs">
            <span>Location: {data.location}</span>
          </div>
          <div
            className="flex hover:shadow-lg justify-center items-center 
           bg-slate-700 text-slate-200 hover:bg-slate-800 hover:text-slate-100 rounded-lg 
           font-semibold w-full h-[50px] text-sm"
          >
            <Link href={`/events/${data.id}`}>Explore Events</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventItem;

import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface datalist {
  data: any;
}

const EventItem: FC<any> = (props: datalist) => {
  const { data } = props;

  return (
    <div className="flex flex-col justify-center items-center bg-slate-50 text-slate-400 m-2  md:min-w-[500px] md:min-h-[300px] rounded-lg hover:shadow-lg">
      <div>
        <Image
          src={data.image}
          alt="event image"
          className=" md:rounded-xl sm:rounded-full my-4"
          width={300}
          height={600}
        />
        <div className="font-mono">
          <div className="flex justify-between my-1 items-center">
            <h2 className=" text-base font-bold text-slate-500">
              {" "}
              {data.title}
            </h2>
            <span className="text-xs">{data.date}</span>
          </div>
          <div>
            <span>{data.location}</span>
          </div>
        </div>
        <div className="flex flex-col hover:shadow-lg justify-center items-center bg-slate-700 text-slate-200 hover:bg-slate-800 hover:text-slate-100 rounded-lg  font-semibold m-2 p2 md:min-w-[80px] md:min-h-[30px] text-sm justify-center">
          <Link href={`/events/${data.id}`}>Explore Events</Link>
        </div>
      </div>
    </div>
  );
};

export default EventItem;

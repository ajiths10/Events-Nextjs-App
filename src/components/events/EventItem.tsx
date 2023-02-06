import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface datalist {
  data: any;
}

const EventItem: FC<any> = (props: datalist) => {
  const { data } = props;

  return (
    <div className="flex flex-row  bg-slate-50 text-slate-400 md:min-w-[600px] overflow-hidden gap-2 m-5 md:min-h-[200px] rounded-lg hover:shadow-lg">
      <div className="">
        <Image
          src={data.image}
          alt="event image"
          className="  "
          width={300}
          height={500}
        />
      </div>
      <div className="flex flex-col w-full p-2">
        <div className="font-mono">
          <div className="flex justify-between my-5 items-center">
            <h2 className=" text-3xl font-bold text-slate-600">
              {" "}
              {data.title}
            </h2>
            <span className="text-xs">{data.date}</span>
          </div>
          <div className=" max-w-[500px] my-3 text-slate-400">
            <span> {data.description}</span>
          </div>
          <div className="text-slate-500">
            <span>Location: {data.location}</span>
          </div>
        </div>

        <div className="flex hover:shadow-lg justify-center items-center mt-8 bg-slate-700 text-slate-200 hover:bg-slate-800 hover:text-slate-100 rounded-lg  font-semibold md:min-w-[80px] md:min-h-[40px] text-sm ">
          <Link href={`/events/${data.id}`}>Explore Events</Link>
        </div>
      </div>
    </div>
  );
};

export default EventItem;

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
      className="grid md:grid-cols-3 sm:grid-cols-1 gap-2 bg-slate-50 text-slate-400 overflow-hidden  m-5
     md:h-[300px] md:w-[600px] sm:h-[200px] sm:w-[500px] rounded-lg hover:shadow-lg"
    >
      <div className="col-span-1 w-full h-full bg-slate-400">
        <Image
          src={data.image}
          alt="event image "
          className=" object-cover h-full w-full"
          width={200}
          height={400}
        />
      </div>
      <div className="md:col-span-2 sm:col-span-1 flex flex-col w-full p-5 relative ">
        <div className="font-mono">
          <div className="flex justify-between my-5 items-center">
            <h2 className=" text-1xl font-bold text-slate-600">
              {" "}
              {data.title}
            </h2>
            <span className="text-xs">{data.date}</span>
          </div>
          <div className=" max-w-[300px] text-xs my-3 text-slate-400">
            <span> {data.description}</span>
          </div>
          <div className="text-slate-500">
            <span>Location: {data.location}</span>
          </div>
        </div>

        <div
          className=" absolute md:bottom-8 bottom-3 right-5 flex hover:shadow-lg justify-center items-center mt-8 bg-slate-700
         text-slate-200 hover:bg-slate-800 hover:text-slate-100 md:rounded-lg rounded-md font-semibold md:h-[40px] md:w-[150px] sm:h-[30px] sm:w-[100px] text-sm"
        >
          <Link href={`/events/${data.id}`}>Explore Events</Link>
        </div>
      </div>
    </div>
  );
};

export default EventItem;

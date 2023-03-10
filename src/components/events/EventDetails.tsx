import Image from "next/image";
import React, { FC } from "react";
import { event } from "@/common/types/event";
import moment from "moment";

const EventDetails = (props: { data: event }) => {
  const { data } = props;

  return (
    <div className="m-5 grid lg:grid-cols-6 grid-cols-1 max-10/12 ">
      <div className="col-span-2 m-auto">
        <Image
          src={data.image}
          alt="event image details"
          className=" rounded-lg "
          width={300}
          height={600}
        />
      </div>
      <div className="col-span-4">
        <div className="font-mono m-5 p-3">
          <div className="my-5">
            <h2 className=" text-4xl font-bold text-slate-600">
              {data.title}|
            </h2>
            <span className="text-md text-slate-400">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-5 h-5 inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                ></path>
              </svg>{" "}
              {moment(data.date).format("MMMM Do YYYY")}
            </span>
          </div>
          <div className="text-xl my-3 text-slate-600">
            <span> {data.description}</span>
          </div>
          <div className="text-slate-400">
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-5 h-5 inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              ></path>
            </svg>
            <span>Location: {data.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;

import React, { useEffect, useState } from "react";
import { getEventById } from "@/common/commonFunction";
import { useRouter } from "next/router";
import EventDetails from "@/components/events/EventDetails";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { event } from "@/common/types/event";
import { getAllEvents } from "@/common/dataFetch";
import Head from "next/head";

const EventDetail = (props: { event: event }) => {
  return (
    <>
      <Head>
        <title>{props?.event?.title}</title>
        <meta
          name="description"
          content={`Next js Event App, Events - ${props?.event?.title}`}
        />
      </Head>

      <div className="flex flex-col content-center items-center ">
        <div
          className="flex flex-col p-5 m-5 border shadow-xl bg-slate-200 min-h-screen text-slate-700 rounded-lg 
        items-center gap-[2rem] w-10/12"
        >
          <h1 className=" text-4xl font-bold font-sans mt-5 border-b-black">
            Events details
          </h1>

          {Object.keys(props.event).length ? (
            <EventDetails data={props.event} />
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

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const eventId = context?.params?.eventId as number | string;
    let res = await getEventById(eventId);

    if (!Object.keys(res).length) throw new Error("Empty");

    return {
      props: {
        event: res,
      },
      revalidate: 900, //revalidate every 15mins
    };
  } catch (error) {
    return {
      props: {},
      notFound: true, //404 page handle
      revalidate: 900, //revalidate every 15mins
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  let events = await getAllEvents();
  const paths = events?.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths: paths,
    fallback: "blocking",
  };
};

export default EventDetail;

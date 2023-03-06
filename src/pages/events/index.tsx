import { getAllEvents } from "@/common/dataFetch";
import { event } from "@/common/types/event";
import EventList from "@/components/events/EventList";
import FilterPannel from "@/components/filterPannel";
import { GetStaticProps } from "next";
import Head from "next/head";
import { useGetEvents } from "@/services/events/getPost";

const Events = () => {
  let filter = { limit: 10, page: 0 };

  //services
  const getEvents = useGetEvents(filter);

  return (
    <>
      <Head>
        <title>All Events</title>
        <meta name="description" content="Next js Event App All events page" />
      </Head>

      <div className="flex flex-col content-center items-center ">
        <div
          className="flex flex-col p-5 m-5 border shadow-xl bg-slate-200 min-h-screen text-slate-700 rounded-lg 
        items-center gap-[2rem] w-10/12"
        >
          <FilterPannel />
          <h1 className=" text-4xl font-bold font-sans mt-5 border-b-black">
            All Events
            <hr />
          </h1>
          <EventList items={getEvents?.data?.data?.data} />
        </div>
      </div>
    </>
  );
};

// For Ref
export const getStaticProps: GetStaticProps = async () => {
  const featuredEvents = await getAllEvents();
  return {
    props: { events: featuredEvents },
    revalidate: 1800, //revalidate every 30mins
  };
};

export default Events;

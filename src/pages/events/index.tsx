import { getAllEvents } from "@/common/dataFetch";
import { event } from "@/common/types/event";
import EventList from "@/components/events/EventList";
import FilterPannel from "@/components/filterPannel";
import { GetStaticProps } from "next";

const Events = (props: { events: event[] }) => {
  return (
    <>
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
          <EventList items={props.events} />
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const featuredEvents = await getAllEvents();
  return {
    props: { events: featuredEvents },
    revalidate: 1800, //revalidate every 30mins
  };
};

export default Events;

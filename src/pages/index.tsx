import styles from "@/styles/Home.module.css";
import { getFeaturedEvents } from "@/common/commonFunction";
import EventList from "@/components/events/EventList";
import { GetStaticProps } from "next";
import { event } from "@/common/types/event";

export default function Home(props: { events: event[] }) {
  return (
    <>
      <div className="flex flex-col content-center items-center ">
        <div
          className="flex flex-col p-5 m-5 border shadow-xl bg-slate-200 min-h-screen text-slate-700 rounded-lg 
        items-center gap-[2rem] w-10/12"
        >
          <h1 className=" text-4xl font-bold font-sans mt-5 border-b-black">
            Home Page
          </h1>
          <EventList items={props.events} />
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
  };
};

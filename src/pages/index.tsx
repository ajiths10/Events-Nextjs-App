import styles from "@/styles/Home.module.css";
import { getFeaturedEvents } from "@/common/dummyData";
import EventList from "@/components/events/EventList";

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <>
      <div className="flex flex-col content-center items-center">
        <div className="flex flex-col p-5 m-5 border shadow-xl bg-slate-200 text-slate-700  min-w-200 rounded-lg md:min-w-[1200px] md:min-h-[500px] items-center gap-[2rem]">
          <h1 className=" text-4xl font-bold font-sans mt-5">Home Page</h1>
          <EventList items={featuredEvents} />
        </div>
      </div>
    </>
  );
}

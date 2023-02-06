import styles from "@/styles/Home.module.css";
import { getFeaturedEvents } from "@/common/dummyData";
import EventList from "@/components/events/EventList";

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline italic">Home Page</h1>
        <EventList items={featuredEvents} />
      </div>
    </>
  );
}

import styles from "@/styles/Home.module.css";
import { getFeaturedEvents } from "@/common/commonFunction";
import EventList from "@/components/events/EventList";
import { GetStaticProps } from "next";
import { event } from "@/common/types/event";
import Head from "next/head";
import { useGetEvents } from "@/services/events/getPost";

export default function Home(props: { events: event[] }) {
  let filter = { limit: 10, page: 0, is_featured: true };

  //services
  const getEvents = useGetEvents(filter);

  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Next js Event App" />
      </Head>

      <div className="flex flex-col content-center items-center ">
        <div
          className="flex flex-col p-5 m-5 border shadow-xl bg-slate-200 min-h-screen text-slate-700 rounded-lg 
        items-center gap-[2rem] w-10/12"
        >
          <h1 className=" text-4xl font-bold font-sans mt-5 border-b-black">
            Home Page
          </h1>
          <EventList items={getEvents?.data?.data?.data} />
        </div>
      </div>
    </>
  );
}

//** For Ref */
export const getStaticProps: GetStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800, //revalidate every 30mins
  };
};

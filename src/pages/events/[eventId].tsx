import React, { useEffect, useState } from "react";
import { getEventById } from "@/common/commonFunction";
import { useRouter } from "next/router";

interface res {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
}

const EventDetail = () => {
  const router = useRouter();

  const [data, setData] = useState<res | any>([]);

  useEffect(() => {
    if (router.isReady) {
      let res = getEventById(router.query.eventId);
      setData(res);
    }
  }, [router]);

  return (
    <div>
      <h1>Event Detail</h1>
      {data ? <div>{data.title}</div> : <div>No data</div>}
    </div>
  );
};

export default EventDetail;

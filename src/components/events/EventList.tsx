import React, { FC } from "react";
import EventItem from "./EventItem";

const EventList: FC<any> = (props: any) => {
  const { items } = props;

  return (
    <div className="m-3 grid md:grid-cols-2 sm:grid-cols-1">
      {items.map((buscat: any) => (
        <EventItem key={buscat.id} data={buscat} />
      ))}
    </div>
  );
};

export default EventList;

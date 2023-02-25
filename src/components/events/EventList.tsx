import React, { FC } from "react";
import EventItem from "./EventItem";

const EventList: FC<any> = (props: any) => {
  const { items } = props;

  return (
    <div className="p-3 grid lg:grid-cols-2 grid-cols-1 gap-5">
      {items.map((buscat: any) => (
        <EventItem key={buscat.id} data={buscat} />
      ))}
    </div>
  );
};

export default EventList;

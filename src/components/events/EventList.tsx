import React, { FC } from "react";
import EventItem from "./EventItem";

const EventList: FC<any> = (props: any) => {
  const { items } = props;

  return (
    <div className="m-3 ">
      {items.map((buscat: any) => (
        <EventItem key={buscat.id} data={buscat} />
      ))}
    </div>
  );
};

export default EventList;

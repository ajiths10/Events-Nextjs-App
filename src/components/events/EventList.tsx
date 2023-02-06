import React, { FC } from "react";
import EventItem from "./EventItem";

const EventList: FC<any> = (props: any) => {
  const { items } = props;

  return (
    <ul>
      {items.map((buscat: any) => (
        <EventItem key={buscat.id} data={buscat} />
      ))}
    </ul>
  );
};

export default EventList;

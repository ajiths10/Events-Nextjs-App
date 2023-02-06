import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface datalist {
  data: any;
}

const EventItem: FC<any> = (props: datalist) => {
  return (
    <li>
      <div>
        <div>
          <Image
            src="/images/dev-image.jpg"
            alt="event image"
            width={100}
            height={100}
          />
          <div>
            <h2>TITLE</h2>
            <div>
              <span>DATE</span>
            </div>
            <div>
              <span>ADDRESS</span>
            </div>
          </div>
          <div>
            <Link href={`/events/${1}`}>Explore Events</Link>
          </div>
        </div>
      </div>
    </li>
  );
};

export default EventItem;

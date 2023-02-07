import React, { useEffect, useState } from "react";
import Link from "next/link";
import { findMonthAndYear } from "@/common/commonFunction";

const DisplayPanel = ({ month, year }: { month: number; year: number }) => {
  const [data, useData] = useState<any>({});

  useEffect(() => {
    let arr = findMonthAndYear({ month: month, year: year });
    useData(arr);
  }, [year, month]);

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="text-lg font-semibold">
          Events in {data.month} {data.year}
        </div>
        <div className="m-1">
          <Link
            href="/events"
            className="bg-slate-600 p-1 px-5 mt-5 rounded-md text-white flex items-center justify-center hover:bg-slate-700 "
          >
            Show all events
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DisplayPanel;

import { DUMMY_EVENTS, YEAR_DATA, MONTH_DATA } from "./dummyData";
import { getAllEvents } from "./dataFetch";

interface dateFilter {
  year: number;
  month: number;
}

export function getFilteredEvents({ year, month }: dateFilter) {
  let filteredEvents = DUMMY_EVENTS.filter((event: any) => {
    const eventDate = new Date(event.date);

    return (
      eventDate.getFullYear() == year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id: number | string) {
  let arr = DUMMY_EVENTS.find((event) => event.id === id);
  if (arr) return arr;
  return [];
}

export async function getFeaturedEvents() {
  let response = await getAllEvents();
  return response.filter((event) => event.isFeatured);
}

export function findMonthAndYear({ month, year }: dateFilter) {
  let obj: { year: string; month: string } = { year: "", month: "" };

  YEAR_DATA.map((buscat) => {
    if (buscat.id === year) {
      obj.year = buscat.value;
    }
  });

  MONTH_DATA.map((buscat) => {
    if (buscat.id === month) {
      obj.month = buscat.value;
    }
  });

  return obj;
}

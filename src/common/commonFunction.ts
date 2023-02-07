import { DUMMY_EVENTS } from "./dummyData";

interface dateFilter {
  year: number;
  month: number;
}

export function getFilteredEvents(dateFilter: any) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id: number | string | string[] | undefined) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

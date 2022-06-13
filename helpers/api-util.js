export const getAllEvents = async () => {
  const response = await fetch(
    "https://nextjs-events-fetching-default-rtdb.firebaseio.com/events.json"
  );
  const responseData = await response.json();

  const events = [];

  for (const key in responseData) {
    events.push({
      id: key,
      ...responseData[key],
    });
  }
  return events;
};

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
}
export async function getFilteredEvents(dateFilter) {
  const allEvents = await getAllEvents();
  const { year, month } = dateFilter;

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

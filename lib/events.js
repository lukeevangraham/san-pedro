export default function keepEventsCurrent(eventsData) {
  // ITERATING OVER RECURRING EVENTS TO KEEP THEM CURRENT
  eventsData.forEach((event) => {
    if (event.repeatsEveryDays > 0) {
      if (new Date(event.startDate) < new Date()) {
        // console.log("e: ", event);

        let start = new Date(event.startDate);
        let end = new Date();

        while (start < end) {
          start.setDate(start.getDate() + event.repeatsEveryDays);
        }

        event.startDate = start.toISOString();
      }
    }
  });
}

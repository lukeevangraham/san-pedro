export function keepEventsCurrent(eventsData) {
  console.log("HERE GOES!", eventsData)
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
  return eventsData
}

// SORT EVENTS BY DATE FIELD
export function compareAndSortDates(a, b) {
  const dateA = new Date(a.startDate);
  const dateB = new Date(b.startDate);

  let comparison = 0;
  if (dateA > dateB) {
    comparison = 1;
  } else if (dateA < dateB) {
    comparison = -1;
  }
  return comparison;
}
import moment from "moment";

const convertTime12to24 = (time12h) => {
  const [time, modifier] = time12h.split(" ");

  let [hours, minutes] = time.split(":");

  if (hours === "12" && modifier.toLowerCase() === "pm") {
    hours = "00";
  }

  if (modifier.toLowerCase() === "pm") {
    hours = parseInt(hours, 10) + 12;
  }

  return `${hours}:${minutes}`;
};

export function keepEventsCurrent(eventsData) {
  const today = moment().startOf("day");

  // ITERATING OVER RECURRING EVENTS TO KEEP THEM CURRENT
  eventsData.forEach((event) => {
    if (event.repeatsEveryDays > 0) {
      const secureStart = moment(event.startDate, "YYYY-MM-DD");
      // console.log(`FIRST START: ${event.startDate}`);

      // console.log(`SECURE START: ${secureStart}`);

      // console.log(`TODAY: ${today}`);

      if (secureStart.isBefore(today)) {
        let start = moment(secureStart);

        while (start.isBefore(today)) {
          start.add(event.repeatsEveryDays, "days");
        }

        event.startDate = start.format("YYYY-MM-DD");
      }
    }
  });
  return eventsData;
}

// SORT EVENTS BY DATE FIELD
export function compareAndSortDates(a, b) {
  const dateA = new Date(
    `${a.startDate.substring(0, 10)} ${convertTime12to24(a.time)}`
  );
  const dateB = new Date(
    `${b.startDate.substring(0, 10)} ${convertTime12to24(b.time)}`
  );

  // console.log("HERE: ", convertTime12to24(a.time));

  // const timeHonoringA = new Date("1970-01-01T" + a.time + "z");
  // const timeHonoringB = new Date("1970-01-01T" + b.time + "z");

  let comparison = 0;
  if (dateA > dateB) {
    comparison = 1;
  } else if (dateA < dateB) {
    comparison = -1;
  }
  // else if (dateA == dateB) {
  //   console.log("SAME Date");
  //   if (timeHonoringA > timeHonoringB) {
  //     comparison = 1;
  //   } else if (timeHonoringA < timeHonoringB) {
  //     comparison = -1;
  //   }
  // }

  return comparison;
}

import moment from "moment";

export const combineDateAndTime = (event) => {
  return `${event.startDate.substring(0, 10)}T${convertTime12to24(
    event.time
  )}:00`;
};

const convertTime12to24 = (time12h) => {
  const [time, modifier] = time12h.split(" ");

  let [hours, minutes] = time.split(":");

  if (hours === "12" && modifier.toLowerCase() === "am") {
    hours = "00";
  }

  if (modifier) {
    if (modifier.toLowerCase() === "pm") {
      hours = parseInt(hours, 10) + 12;
    }
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
  const dateA = combineDateAndTime(a);
  const dateB = combineDateAndTime(b);

  let reg = /-|:|T|\+/; //The regex on which matches the string should be split (any used delimiter) -> could also be written like /[.:T\+]/
  let parsed = [dateA.split(reg), dateB.split(reg)];
  let dates = [
    new Date(
      parsed[0][0],
      parsed[0][1],
      parsed[0][2],
      parsed[0][3],
      parsed[0][4],
      parsed[0][5]
    ),
    new Date(
      parsed[1][0],
      parsed[1][1],
      parsed[1][2],
      parsed[1][3],
      parsed[1][4],
      parsed[1][5]
    ),
  ];

  return dates[0] - dates[1];
}

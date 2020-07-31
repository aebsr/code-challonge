const validEvents = ["search_changed", "search_failed"];
const valid = {}; // aggregate count of events by type
let junk = []; // array of invalid event IDs
let events = []; // placeholder for flat array of events

const data = [
  // fake data, easier than creating a mock api
  { name: "search_changed", id: 1 },
  { name: "search_changed", id: 2 },
  { name: "search_failed", id: 3 },
  { name: "foo", id: 4 },
  [
    { name: "bar", id: 5 },
    { name: "search_changed", id: 6 },
    [
      { name: "search_failed", id: 7 },
      { name: "search_changed", id: 8 },
      [{ name: "loop", id: 9 }],
    ],
  ],
];

const flatten = (arr) => {
  arr.forEach((event) => {
    if (Array.isArray(event)) {
      flatten(event);
    } else {
      events.push(event);
    }
  });
};

const process = (data) => {
  flatten(data);

  validEvents.forEach((type) => {
    const match = events.filter((event) => event.name === type);
    valid[type] = match.length;
  });

  events.map((event) => {
    if (!validEvents.includes(event.name)) {
      junk.push(event.id);
    }
  });
};

process(data);

console.log("valid events", valid);
console.log("invalid event IDs", junk);

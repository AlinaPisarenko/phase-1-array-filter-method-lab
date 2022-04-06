const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

function findMatching(list, someName) {
  let matchingName = list.filter(
    (name) => name.toLowerCase() === someName.toLowerCase()
  );
  return matchingName;
}
findMatching(drivers, "bobby");

function fuzzyMatch(list, someLetters) {
  let matchingLetters = list.filter((name) => name[0] === someLetters[0]);
  return matchingLetters;
}

const driversTwo = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];

function matchName(list, someName) {
  let matchingName = list.filter((item) => item.name === someName);

  return matchingName;
}
matchName(driversTwo, "bobby");

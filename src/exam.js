const programs = [
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
];

const results = [];

for (let index = 0; index < programs.length; index++) {
  const [command] = programs[index].split(":");

  if (command === "Add Stop") {
    const [, changeIndex, value] = programs[index].split(":");
    const prevElement = programs[index - 1];
    const [firstPart] = prevElement.split("::");
    const res = prevElement.slice(changeIndex);
    const data = `${firstPart}::${value}${res}`;
    results.push(data);
    console.log(data);
  }

  if (command === "Remove Stop") {
    const [, changeIndex, value] = programs[index].split(":");
    const prevElement = programs[index - 2];

    const res = prevElement.slice(changeIndex);
  }
}

console.log(results);

/* 

Hawai::RomeCyprys-Greece
Hawai::Rome-Greece
Bulgaria::Rome-Greece
Ready for world tour! Planned stops: Bulgaria::Rome-Greece

*/

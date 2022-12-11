function main(inputs) {
  let mainTrip = inputs.shift();

  for (const input of inputs) {
    const [command, index, modifier] = input.split(":");

    if (command === "Add Stop") {
      for (let i = 0; i < mainTrip.length; i++) {
        if (i === Number(index)) {
          mainTrip =
            mainTrip.substring(0, index) + modifier + mainTrip.substring(index);
          console.log(mainTrip);
        }
      }
    }

    if (command === "Remove Stop") {
      const res = mainTrip.slice(index, Number(modifier) + 1);
      mainTrip = mainTrip.replace(res, "");
      console.log(mainTrip);
    }

    if (command === "Switch") {
      mainTrip = mainTrip.replace(index, modifier);
      console.log(mainTrip);
    }

    if (command === "Travel") {
      console.log(`Ready for world tour! Planned stops: ${mainTrip}`);
    }
  }
}
console.log(
  "-----------------------------------------------------------------------------------------------"
);

main([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);

console.log(
  "-----------------------------------------------------------------------------------------------"
);

main([
  "Albania:Bulgaria:Cyprus:Deuchland",
  "Add Stop:3:Nigeria",
  "Remove Stop:4:8",
  "Switch:Albania: Azərbaycan",
  "Travel",
]);

console.log(
  "-----------------------------------------------------------------------------------------------"
);

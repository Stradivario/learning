const program = {
  "Add Stop": (mainTrip, index, modifier) => {
    for (let i = 0; i < mainTrip.length; i++) {
      if (i === Number(index)) {
        mainTrip =
          mainTrip.substring(0, index) + modifier + mainTrip.substring(index);
        console.log(mainTrip);
      }
    }
  },
  "Remove Stop": (mainTrip, index, modifier) => {
    const res = mainTrip.slice(index, Number(modifier) + 1);
    mainTrip = mainTrip.replace(res, "");
    console.log(mainTrip);
  },

  Switch: (mainTrip, index, modifier) => {
    mainTrip = mainTrip.replace(index, modifier);
    console.log(mainTrip);
  },

  Travel: (mainTrip) => {
    console.log(`Ready for world tour! Planned stops: ${mainTrip}`);
  },
};

function main(inputs) {
  let mainTrip = inputs.shift();

  for (const input of inputs) {
    const [command, index, modifier] = input.split(":");
    if (!program[command]) {
      throw new Error("Missing command for program");
    }
    if (typeof program[command] === "function") {
      program[command](mainTrip, index, modifier);
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

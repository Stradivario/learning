function find(object, array) {
  const searchableResult = object.name; // 'Vesi';
  const foundResult = array.find((item) => item === searchableResult);
  return foundResult;
}

function findIndex(object, array) {
  const searchableResult = object.name; // 'Vesi';
  const foundResult = array.findIndex((item) => item === searchableResult);
  return foundResult;
}

function main(name) {
  const array = ["1", "2", "3", "4", "Vesi"];
  const result = find({ name }, array);
  const index = findIndex({ name }, array);

  return { result, index };
}

function anotherFunction() {
  const myVariable = main("Vesi");
  console.log(myVariable.result);
  console.log(myVariable.index);
}

anotherFunction();

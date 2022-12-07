let hello = "Giga";

console.log(hello.toUpperCase());
// Scope 1

function test() {
  // Scope 2
  hello = "Kris";

  console.log(hello.toUpperCase());
}

test();

// Scope 1

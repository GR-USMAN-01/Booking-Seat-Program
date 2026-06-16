var audi = [
  ["R1S1", "R1S2", "R1S3"],
  ["R2S1", "R2S2", "R2S3"],
  ["R3S1", "R3S2", "R3S3"]
];

function printSeats() {
  var seats = "";
  for (var i = 0; i < audi.length; i++) {
    var rowLine = "";
    for (var j = 0; j < audi[i].length; j++) {
      rowLine += audi[i][j] + " ";
    }
    seats += rowLine + "\n";
  }
  return seats;
}

for (var i = 0; i >= 0; i++) {
  var selectedOption = prompt(
    "Please select one of the following options:\n" +
    "0. Exit\n" +
    "1. Book your seat"
  );
  if (selectedOption === "0") {
    break;
  }
  else if (selectedOption === "1") {
    console.log(printSeats());

    var r = +prompt("Select row");
    if (r < 1 || r > audi.length) {
      console.log("Wrong row input");
      continue;
    }

    var c = +prompt("Select column");
    if (c < 1 || c > audi[r - 1].length) {
      console.log("Wrong column input");
      continue;
    }

    if (audi[r - 1][c - 1] === "X") {
      console.log("Seat already booked");
    } else {
      audi[r - 1][c - 1] = "X";
      console.log("Seat booked successfully!");
      console.log(printSeats());
    }
  } else {
    console.log("Invalid option");
  }
}
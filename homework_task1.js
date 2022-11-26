// First Task

//Neveket tartalmazó tömbben megmondja, hogy van e Gábor és ha van kiírja, hogy az hányadik elem a tömbben

function nameFinder(nums) {
  nameIndex = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == "Gábor") {
      nameIndex = true;
      console.log("Megtaláltam Gábort! " + (i + 1) + ". elem.");
      break;
    }
  }
  if (nameIndex === false) {
    console.log("Nincs Gábor a tömbben.");
  }
}

const names = [
  "István",
  "Katalin",
  "Attila",
  "Gábor",
  "Péter",
  "Anna",
  "András",
];

const names2 = [
  "István",
  "Katalin",
  "Attila",
  "Antal",
  "Péter",
  "Anna",
  "András",
];

nameFinder(names);
nameFinder(names2);

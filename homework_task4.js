// Fourth Task

//Számokat tartalmazó tömbön megy végig és összegzi az elemeket majd kiírja a változót
//Bővítés: Kidobja ha a tömb elemei között van nem szám
//Bővítés2: Amennyiben nem szám az egyik elem, próbáljuk meg átkonvertálni, ha nem sikerül

function sumArray(nums) {
  let sum = 0;
  let notNumber = false;
  let convertFailed = false;
  for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i] === "number" && isNaN(parseInt(nums[i])) === false) {
      sum = sum + nums[i];
    } else if (isNaN(parseInt(nums[i])) === false) {
      notNumber = true;
      sum = sum + parseInt(nums[i]);
    } else {
      notNumber = true;
      convertFailed = true;
    }
  }

  if (notNumber === true) {
    console.log("A tömbnek van nem szám eleme:");
    if (convertFailed === true) {
      console.log("Nem sikerült mindet konvertálni!");
    } else {
      console.log("Sikerült mindet konvertálni!");
    }
  }

  console.log("A számok összege: " + sum + "\n");
}

const num = [4, 2, 2, 1, 1];
sumArray(num);

num.push(NaN); //egy NaN-t hozzáadok az eredeti szám tömbhöz
sumArray(num);

const num2 = [4, 2, "a", 2, 1];
sumArray(num2);

num2.push("4"); //egy konvertálható stringet hozzáadok az num2 tömbhöz
sumArray(num2);

num2.splice(2, 1); //kiveszem a nem konvertálható 'a' stringet
sumArray(num2);

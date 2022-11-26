// Third Task

//Számokat tartalmazó tömbön megy végig és összegzi az elemeket majd kiírja a változót
//Bővítés: Kidobja ha a tömb elemei között van nem szám

function sumArray(nums) {
  let sum = 0;
  let notNumber = false;
  for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i] === "number" && isNaN(nums[i]) === false) {
      sum = sum + nums[i];
    } else {
      notNumber = true;
    }
  }

  if (notNumber === true) {
    console.log("A tömbnek van nem szám eleme.");
  }
  console.log("A számok összege: " + sum);
}

const num = [4, 2, 2, 1, 1];
sumArray(num);

const num2 = [4, 2, "a", 2, 1];
sumArray(num2);

num.push(NaN); //egy NaN-t hozzáadok az eredeti szám tömbhöz
sumArray(num);

function checkAge(age) {
    return age < 70;
}

const ageArray = [34, 23, 20, 26, 12];
let check = ageArray.some(checkAge); // true
console.log(check);

if (check) {
    console.log("All members must be at least 18 years of age.")
}

// using arrow function
let check1 = ageArray.some(age => age > 70); // false
console.log(check1);


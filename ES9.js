//Object spread operator
const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2,
}
const {tiger, ...rest} = animals;

const array = [1,2,3,4,5];
const sum = (a, b, c, d, e) => {
    return a + b + c + d + e;
}
console.log(sum(...array))
function calculateSumAndProduct(a, b, ...rest) {
    console.log(a, b);
    console.log(a * b);
    console.log(rest);
    console.log(rest.reduce((sum, num) => sum + num, 0));
}

calculateSumAndProduct(2, 3, 4, 5, 6);


const list1 = [1, 2, 3];
const list2 = [4, 5, 6];
const list3 = [7, 8, 9];

const newList = [...list1, ...list2, ...list3, 'a', 'b', 'c', 10, 11];

console.log(newList);
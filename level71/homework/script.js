


let myList =[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let Count = myList.length

console.log('The length of the array is ' + Count)


// 

let numbers = [ 11, 5 , 5 , 3 ,1]

let max = numbers[0]

let min = numbers[0]

for(let i = 1 ; i < numbers.length ; i++){

    if(numbers[i] > max){
        max = numbers[i]
    }

    if(numbers[i] < min){
        min = numbers[i]
    }
}

console.log("Max Number in the list: " + max)
console.log("Min Number in the list: " + min)



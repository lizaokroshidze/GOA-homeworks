


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


// 

let words = [ 'apple', 'banana', 'orange', 'kiwi', 'watermelon']

let firstleteers = []

for ( let i = 0; i < words.length; i++){
    firstleteers.push(words[i][0])
}

console.log("First letters: " + firstleteers)


// 

let Users = ['Liza Okroshidze', 'Niko Okroshidze', 'Melano Gogoladze']
let initials = []

for (let i = 0; i < Users.length; i++) {
  let names = Users[i].split(" ")
  initials.push(names[0][0] + "." + names[1][0])
}

console.log("Initials: " + initials)


// 

let numbersWithNegatives = [1, -2, 3, -4, 5]

for (let i = 0; i < numbersWithNegatives.length; i++) { 
  if (numbersWithNegatives[i] < 0) { 
    numbersWithNegatives.splice(i, 1, 0)
  }
}

console.log("Changed arr: " + numbersWithNegatives)

// 

let userNames = ['Liza Okroshidze', 'niko Okroshidze', 'Melano Gogoladze'] 

for (let i = userNames.length - 1; i >= 0; i--) { 
  const names = userNames[i].split(" ")
  if (names[0][0] !== names[0][0].toUpperCase() || names[1][0] !== names[1][0].toUpperCase()) {
    userNames.splice(i, 1) 
  }
}

console.log("Changed list : " + userNames)

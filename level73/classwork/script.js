// function

function hello(name){
    console.log("Hello " + name);
}

hello("liza")

function list(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    return sum;
}

console.log(list([1,2,3,4,5,6,7,8,9,10]))




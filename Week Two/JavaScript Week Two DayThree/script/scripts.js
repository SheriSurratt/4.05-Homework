// var, let, const
// let x = 5;

// let h = 7.0009;

//  snake case
// const my_fave_number = 7;

// let y = x % my_fave_number;

// Strings

let a = "hello";
let b = "this is a string";
let c = "7";
// this is the esc
let f = "it's seven";

// this is the new line
let g = "it's \n seven";

// boolean

let i = false;
console.log(typeof h);

// Implicit

let num = 7+7+7

let num2 = 5+5+' 5'
let num3 = '3'+3+3

let amount = 1000;

let donation = console.log("How much would you like to give me")

amount = Number(donation) + amount

// typecasting
let strnum = parseInt('10');

let newAmount = parseFloat("10.25");


// concatenation
 
let greeting = "Hello";
let fName = "Joe"
 
// console.log(greeting +fName)

// Template literals
// console.lo('${greeting} ${fName}, how are you?')

// flow and Control
//Simple if statement
// let x = true;
// if(x) {
// 	console.log(true);
// } else if (x == true) {
// 	console.log("this won't run");
// } else {
// 	console.log(false);
// }

let temp = 90;

// using the && both statements has to be true
// the || only one needs to be true
// if (temp > 70 && temp <95){
//     console.log("print");
// } else {
//     console.log("no print");
// }

// for(let i =1; i < 10; i++){
//     console.log('for loop', i);
// }
// 99 bootles of beer on the wall

// for (let bottle = 10; bottle >= 0; bootle -1){
//     if(bottle === 0){
//         console.log("go buy more")
//     }else{
//         console.log("still more to drink")
//     }
// }

let n = 3;

switch(n){
    case 3:
        console.log('three')
        break;
    case 1:
        console.log('one')
        break;

    case 2:
        console.log('two')
        break;
    default:
        console.log('default')
        break;

}

// const will not let you override and let allows you to override
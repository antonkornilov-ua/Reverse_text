console.log('числа');
console.log(`MAX_SAFE_INTEGER ${Number.MAX_SAFE_INTEGER}`);


const stringInt = '42';
console.log(parseInt(stringInt)+2); //44

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min +1 ) + min)
    
}
console.log('Random number is :' + getRandomNumber(1, 100));



// Test задача 1
let text = prompt("Enter some text");
let reverseText = text.split('').reverse().join('');
alert(reverseText);
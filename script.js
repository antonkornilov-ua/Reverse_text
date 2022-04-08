
// // Test задача 1
// let text = prompt("Enter some text");
// let reverseText = text.split('').reverse().join('');
// alert(reverseText);
let textInput = document.querySelector("input");
let button = document.querySelector("buttonreverse").addEventListener('click', reverseText)
let outpuText = document.querySelector("output");

function reverseText () {
    return outpuText.innerHTML = textInput.value.split('').reverse().join('');
};

// // Test задача 1
// let text = prompt("Enter some text");
// let reverseText = text.split('').reverse().join('');
// alert(reverseText);
let textInput = document.querySelector("input");
let button = document.querySelector("buttonreverse").addEventListener('click', reverseText)
let outpuText = document.querySelector("output");

reverseText () {
let reText = textInput.split('').reverse().join('');
return outpuText.innerHTML(reText)
}
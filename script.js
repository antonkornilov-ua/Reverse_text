
// // Test задача 1
// let text = prompt("Enter some text");
// let reverseText = text.split('').reverse().join('');
// alert(reverseText);
let textInput = document.getElementById('inputMe')
let button = document.getElementById("buttonreverse").addEventListener('click', reverseText)
let outpuText = document.getElementById("outputMe");

function reverseText () {
    return outpuText.innerHTML = textInput.value.split('').reverse().join('');
};

function fuck(params) {
    alert ('FUCK! It Works!')
}
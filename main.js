let photo = document.querySelector('.img-border')
let inputs = document.querySelectorAll('input')
inputs = [...inputs].slice(1);
let arr = [photo].concat(inputs)
console.log(arr)
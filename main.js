let photo = document.querySelector('.img-border')
let inputs = document.querySelectorAll('input')
inputs = [...inputs].slice(1);
let arr = [photo].concat(inputs)
console.log(arr)
arr=[...arr].reverse()

const appearTime =(arr,i,outcome)=>{
    setTimeout(()=>{
        arr[i].style=outcome;
    }, 95*(i+1))
}
console.log(photo)
const inputAppearFn = (arr) => {
for(let i = arr.length-1; i >=0; i--){
    const showing = `opacity:1;`
    setTimeout(()=>{
        appearTime(arr,i,showing)
    },1000)
    
}
}
inputAppearFn(arr)
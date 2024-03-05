let photo = document.querySelector('.img-border')
let inputs = document.querySelectorAll('input')
inputs = [...inputs].slice(1);
let arr = [photo].concat(inputs)
console.log(arr)
arr=[...arr].reverse()

const appearTime =(arr,i,outcome)=>{
    const l = arr[i].labels;
console.log(l)
    setTimeout(()=>{
        arr[i].style=outcome;
        if(l.length > 0){
            arr[i].labels[0].style=outcome
        }
    }, 95*(i+1))
}
console.log(photo)
const inputAppearFn = (arr) => {
for(let i = arr.length-1; i >=1; i--){
    const showing = `opacity:1;`
        setTimeout(()=>{
            appearTime(arr,i,showing)
        },1000)
    
}
}
inputAppearFn(arr)
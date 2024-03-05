let photo = document.querySelector('.img-border')
let inputs = document.querySelectorAll('input')
inputs = [...inputs].slice(1);
let arr = [photo].concat(inputs)
console.log(arr)
// reverse the array
arr=[...arr].reverse()

// blink function
const blink =(arr,i,outcome)=>{
    const l = arr[i].labels;
    setTimeout(()=>{
        arr[i].style=outcome;
        if(l.length > 0){
            arr[i].labels[0].style=outcome
        }
    }, 95*(i+1))
}
// appear function
const appear = (arr) => {
for(let i = arr.length-1; i >=0; i--){
    const showing = `opacity:1;`
        setTimeout(()=>{
            blink(arr,i,showing)
        },1250)
    
}
}
appear(arr)
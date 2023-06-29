let i=[10,20,30,40,50]

i.forEach(a)

function a(item,index,arr){
    if(item<50){
        console.log(item)
        console.log(index)
    }
}


let arr=[10,50,40,30,1,60,80,60]
let sum=0



arr.forEach((value)=>{
    sum+=value
})
console.log(sum)

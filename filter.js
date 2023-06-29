let arr=[1,2,3,4,5,6,7,8,9,10]

let even=arr.filter((value)=>{
    return value%2==0
})
console.log(even)

let odd=arr.filter((value)=>{
   return value%2!=0
})

console.log(odd)

let values=arr.filter((value)=>{
    return value
})
console.log(values)
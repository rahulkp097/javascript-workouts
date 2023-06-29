let arr=[1,2,3,4,5]

let postiton=2

for(let i=postiton-1;i<arr.length;i++){
    arr[i]=arr[i+1]
}
arr.length--


console.log(arr)
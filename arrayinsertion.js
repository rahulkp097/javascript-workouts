let postiton=2
let value=10
let arr=[1,2,3,4,5]

for(let i=arr.length-1;i>postiton-1;i--){
    arr[i+1]=arr[i]

   
    
    }
    arr[postiton]=value
    


console.log(arr)



let arr=[1,5,3,2,10,4,5,9,5]

for(let i=0;i<arr.length;i++){
    if(arr[i]%5==0){
        i+=2
        console.log(arr[i])
        
    }
}
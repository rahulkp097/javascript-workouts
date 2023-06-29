let arr=[30,20,10,20,20,30,10]


let max=0
let maxarray;
for(let i=0;i<arr.length;i++){
    let count=0
    for(let j=0;j<arr.length;j++){
        if(arr[i]==arr[j]){
            count++
        }

        if(count>max){
            max=count
            maxarray=arr[i]
        }
    }

}
console.log(max)

console.log(maxarray)
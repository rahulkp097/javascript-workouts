let arr=[1,2,3,4,2,6,1]

let newarray=new Set(arr)



console.log(newarray)


let b=[arr,newarray]

console.log(b)



for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            for(let k=j;k<arr.length;k++){
                arr[k]=arr[k+1]
            }
            arr.length--
        }
    }
}

console.log(arr)


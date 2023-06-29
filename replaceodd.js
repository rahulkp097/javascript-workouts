let arr=[1,2,3,4,5,6,7]


for(let i=0;i<arr.length;i++){
    if(arr[i]%2!=0){
        arr[i]="$"
    }
}

console.log(arr)
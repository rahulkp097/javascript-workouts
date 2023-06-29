
let arr=[1,2,3,4,5,6,7,8,9,10];

for(let i=0;i<arr.length;i++){
    if(prime(arr[i])){
        for(let j=i;j<arr.length;j++){
            arr[j]=arr[j+1]
        }
        i--, arr.length--
    }
}

console.log(arr)

let n=[1,7,5,1,5,7,2,6,3,1,8,2,0]


for(let i=0;i<n.length;i++){

    for(let j=i+1;j<n.length;j++){
        if(n[j]<n[i]){
      let  temp=n[j];
            n[j]=n[i]
            n[i]=temp;
        }
    }
}
console.log(n)

for(let i=0;i<n.length;i++){
    if(n[i]==n[i+1]){
        for(let j=i+1;j<n.length;j++){
            n[j]=n[j+1]
        }
        n.length--;
        i--
    }
}
console.log(n)
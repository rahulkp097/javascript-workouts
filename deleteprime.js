function prime(num){
    if(num==null)return false
    if(num<2){
        return false

    }

    for(let i=2;i<num;i++){
        if(num%i==0){
            return false
        }
    }
     return true
}
console.log(prime())

let arr=[1,2,3,4,5,6,7,8]


for(let i=0;i<arr.length;i++){
    if(prime(arr[i])==true){
        
        for(let j=i;j<arr.length;j++){
            arr[j]=arr[j+1]
        }
        i--
        arr.length--
        
    }
}
console.log(arr)

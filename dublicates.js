let arr=[1,2,3,10,1,2,10,5,6,10,1,2,3]
let arrn=new Set()
for(let i=0;i<arr.length;i++){
   let  flag=0
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            flag=1
        
        }
        
    }
    if(flag==0){
        console.log(arr[i])
    }
    if(flag==1){
        console.log(arr[i])
        arrn.add(arr[i])
    }
}



console.log(arrn)
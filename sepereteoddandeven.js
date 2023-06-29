let a=[1,2,3,4,5,6,7,8]
let odd=[]
let even=[];


for(let i=0;i<a.length;i++){
    if(a[i]%2==0){
        even.push(a[i])
    }
    else odd.push(a[i])
}


console.log(odd)
console.log(even)
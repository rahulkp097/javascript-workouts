let arr=[10,20,30,40,50,60,70]

let ll=0;
let sl=0;

for(let i=0;i<arr.length;i++){
    if(arr[i]>ll){
        sl=ll
        ll=arr[i]
        
    }
}

console.log(ll)
console.log(sl)




let ab=arr.reduce((a,b)=>{
    let c=0
    if(b>a){
        c=a
        a=b
    }
    return a
},0)
console.log(ab)

c=Math.max(arr)
console.log(c)



let i=12
let k;

k=(i>10)?true:false
console.log(k)
let a=[5,-1,1,-4,8]

for(let i=0;i<a.length;i++){
    if(a[i]<0){
        console.log(a[i])
    }
}


let sum=a.reduce((a,b)=>{
        a+=b
        return a
},0)

console.log(sum)
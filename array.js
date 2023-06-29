// let arr=[10,20,30,40,50];

// let newarray=arr.map(double);

// function double(x){

//     return 
// }

// console.log(newarray)


//Filter

// let arr=[1,2,3,4,5,6,7]

// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         console.log(arr[i])
//     }
// }

// function findeven(x){
//     return x <4;
// }

// let even=arr.filter(findeven)

// console.log(even)



//reduce 


// let a=[1,2,3,4,5]
// let sum=0
// for(let i=0;i<a.length;i++){
// sum+=arr[i];
// }
// console.log(sum)

// let asum=a.reduce (function sum(a,b){
//    a=a+b
//     return a
// },0)

// console.log(asum)


//max value and min value

// let min=Number.MAX_VALUE
// for(let i=0;i<arr.length;i++){
//     if(arr[i]<min)
//       min=arr[i]
// }

// console.log(min)

// let rmin=arr.reduce((a,b)=>{
//    if(b<a){
//     a=b
//    }
//    return a
// },Number.MAX_VALUE)

// console.log(rmin)



function demo(...num){
    result=num+num
    return result
}


console.log(demo(1,2,3))
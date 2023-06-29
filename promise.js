let p=new Promise((resolve,reject)=>{
    let a=1+2

    if(a==3){
        resolve("sucess");
    }
    else reject("Failed")
})
p.then((message)=>{
    console.log(message)
})
.catch((message)=>{
    console.log(message)
})


 p=new Promise (function (resolve,reject){
    let a=2+3

    if(a==5){
        resolve("sucess")
    }
    else {
        reject("failed")
    }
 })
 p.then((message)=>{
    console.log(message)
})
p.catch((message)=>{
    console.log(message)
})



let pro=new Promise((resolve,reject)=>{
    let a=2+55

    if(a==7)resolve("Sucess")
    else reject("Failed")
})
pro.then((message)=>{
    console.log(message)
})
pro.catch((message)=>{
    console.log(message)
})
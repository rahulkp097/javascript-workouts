// let name={
//     firstname : "Rahul",
//     secondname : "KP",
//     age: 25
// }
// let name1={
//     firstname : "Ranjith",
//     secondname : "KP",
//     age: 27
// }

// function printname(){
//     console.log(this.firstname+" "+this.secondname +" "+this.age)
// }

// printname.apply
// printname.call(name1)



let student1={
    name : "rahul k p",
    getname (age,location){
        console.log(this.name,age,location)
    }
}

let student2={
    name : "ranjith"

}


// student1.getname.call(student2,25,"akhilanam")
// student1.getname.apply(student2,[25,"akhilanam"])
let fun=student1.getname.bind(student2,[25,"akhilanam"])
fun();
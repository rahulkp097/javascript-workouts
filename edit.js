

// class node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// class bst{
//     constructor(){
//         this.root=null
//     }

// insert(value){

//     let newnode=new node(value);
//     if(this.root===null){
//         this.root=newnode;
//         return this
//     }
//     let temp=this.root;
//     while(true){
//         if(temp.value===value)return undefined
//         if(value<temp.value){
//             if(temp.left===null){
//                 temp.left=newnode;
//                 return this
//             }
//             temp=temp.left
//         }
//         else{
//             if(temp.right===null){
//                 temp.right=newnode;
//                 return this
//             }
//             temp=temp.right
//         }
//     }
// }




// inorder(){
//     let node=this.root
//     let data=[]
//     function traverse(node){
//         if(node.left)traverse(node.left)
//         data.push(node.value)
//         if(node.right)traverse(node.right)
//     }
//     traverse(node)
//     return data
// }


// }


// let obj=new bst()
// obj.insert(10)
// obj.insert(6)
// obj.insert(15)
// obj.insert(3)
// obj.insert(8)
// obj.insert(20)
// obj.insert(16)


// console.log(obj.inorder())


    // class graph{
    //     constructor(){
    //         this.adjacencyList={}
    //     }

    // addVertex(vertex){
    //     if(!this.adjacencyList[vertex]){
    //         this.adjacencyList[vertex]=[]
    //         return true
    //     }
    //     return false

    // }

    // addEdge(vertex1,vertex2){
    //     if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
    //         this.adjacencyList[vertex1].push(vertex2)
    //         this.adjacencyList[vertex2].push(vertex1)
    //         return true
    //     }
    //     return false
    // }

    // removeEdge(vertex1,vertex2){
    //     if(this.adjacencyList[vertex1] && this. adjacencyList[vertex2]){
    //         this.adjacencyList[vertex1]=this.adjacencyList[vertex1].filter(v=> v!=vertex2)
    //         this.adjacencyList[vertex2]=this.adjacencyList[vertex2].filter(v=> v!=vertex1)
    //         return true
    //     }
    //     return false
    // }

    // removeVertex(vertex){
    //     if(!this.adjacencyList[vertex])return undefined
    //     while(this.adjacencyList[vertex].length){
    //         let temp=this.adjacencyList[vertex].pop()
    //         this.removeEdge(vertex,temp)
    //     }
    //     delete this.adjacencyList[vertex]
    // }

    // }



    // let obj=new graph()
    // obj.addVertex(10)
    // obj.addVertex(20)
    // obj.addVertex(30)
    // obj.addVertex(40)
    // obj.addVertex(50)
    // obj.addEdge(10,20)
    // obj.addEdge(30,10)
    // obj.removeEdge(20,30)
    // obj.removeVertex(20)
    // console.log(obj)



class heap{
    constructor(){
        this.data=new Array();

    }
add(value){
    this.data.push(value)
    let current=this.data.length-1

    while(current>0){
        let parent=Math.floor((current-1)/2)
        if(this.data[current]<this.data[parent]){
            break;
        }
        [this.data[current],this.data[parent]]=[this.data[parent],this.data[current]]
        current=parent
    }
}




}


let obj=new heap()
obj.add(10)
obj.add(20)
obj.add(80)
obj.add(50)
obj.add(40)
obj.add(30)
console.log(obj)
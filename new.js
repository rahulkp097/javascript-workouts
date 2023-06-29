class node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }

}

class bst{
    constructor(){
        this.root=null
    }

insert(value){
  let   newnode=new node(value)
    if(this.root===null){
        this.root=newnode
        return this
    }
let temp=this.root
while(true){
    if(value<temp.value){
        if(temp.left===null){
            temp.left=newnode;
            return this
        }
        else temp=temp.left
    }
    else {
        if(temp.right===null){
            temp.right=newnode
            return this
        }
        else temp=temp.right
    }
}
}
findnegative(){
    let node=this.root
    traverse(node)
    function traverse(node){
        if(node.left) traverse(node.left)
        if(node.right)traverse(node.right)
        if(node.value<0){
            console.log(node.value)
        }
    }
}

maxheight(){
    let node=this.root
   
    let max=0
    traverse(node)
    function traverse(node){
        if(node.value>max){
            max=node.value
         
            console.log(max)
        }
        console.log( Math.max(node.value))
        if(node.left) traverse(node.left)
        if(node.right)traverse (node.right)
       
    }
     return max
}

minvalue(){
    let temp=this.root
   
    let res
    traverse(temp)
    function traverse(temp){
        if(temp==null)return res
         res=temp.value
        let min=traverse(temp.left)
        let min1=traverse(temp.right)
        if(min<res) res=min
        if(min1<resx``)res=min1
        console.log(res)
        return res
    }
    
}

bfs(){
    let temp=this.root
    let arr=[];
    let queue=[];
    queue.push(temp)
    
    while(queue.length){
        let node=queue.shift()
        arr.push(node.value)
        if(node.left)queue.push(node.left)
        if(node.right)queue.push(node.right)
    }
    return arr
}



}

let obj=new bst()
obj.insert(55)
obj.insert(60)
obj.insert(40)
obj.insert(55)
obj.insert(35)
obj.insert(45)
obj.insert(-10)
obj.insert(-40)
obj.insert(-15)
console.log(obj.bfs())
obj.findnegative();

console.log(obj)
console.log(obj.maxheight())
console.log(obj.minvalue())


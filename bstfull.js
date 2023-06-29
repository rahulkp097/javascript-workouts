class node{
    constructor(value){
        this.value=value;
        this.left=null
        this.right=null
    }

}

class bst{
    constructor(){
        this.root=null
    }

addvalue(value){
    let newnode=new node(value)
    if(this.root==null){
        this.root=newnode;
        return this
    }
    let temp=this.root;
    while(temp){
        if(value<temp.value){
            if(temp.left==null){
                temp.left=newnode;
                return this
            }
            temp=temp.left;
        }
        else{
            if(temp.right==null){
                temp.right=newnode
                return this
            }
            temp=temp.right
        }
    }
}

find(value){
    if(this.root==null)return false
    if(value==null)return false
    let temp=this.root

    while(temp){
        if(value<temp.value){
            temp=temp.left
        }
        else if(value>temp.value){
            temp=temp.right
        }
        else return true
    }
    return false
}

nearestvalue(value){
    if(value==null)return false
    let current=this.root;
    let closestValue=this.root.value
    while(current){
        if(Math.abs(current.value-value)<Math.abs(closestValue-value)){
            closestValue=current.value
        }
        if(value<current.value){
            current=current.left
        }
        else if(value>current.value){
            current=current.right
        }
        else break;
    }
    return closestValue
}

bsf(){
    let current=this.root
    let q=[]
    let arr=[]
    q.push(current)
    while(q.length){
        let temp=q.shift()
         arr.push(temp.value)
        if(temp.left)q.push(temp.left)
        if(temp.right)q.push(temp.right)
        
    }
    return arr
    
}
preorder (){
    let current=this.root
  traverse(current)
    function traverse(current){
        console.log(current.value)
        if(current.left)traverse(current.left)
        if(current.right)traverse(current.right)
    }
}

inorder(){
    let current=this.root
    traverse(current)
    function traverse(current){
        if(current.left)traverse(current.left)
        console.log(current.value)
        if(current.right)traverse(current.right)
    }
}

postorder(){
    let current=this.root
    traverse(current)
    function traverse(current){
        if(current.left)traverse(current.left)
        if(current.right)traverse(current.right)
        console.log(current.value)
    }
}

}

function traverse(current){
    if(current==null)return 0

    let left=traverse(current.left)
    let right=traverse(current.right)

    return Math.max(left,right)+1
}



let obj=new bst();
obj.addvalue("1")
obj.addvalue("2")
obj.addvalue("3")
obj.addvalue("4")
obj.addvalue("5")
obj.addvalue("6")
obj.addvalue("7")
obj.addvalue("8")
obj.addvalue("9")
obj.inorder()
obj.preorder()
obj.postorder()
console.log(obj.bsf())
console.log(obj.nearestvalue(16))
console.log(obj.find(15))
console.log(traverse(obj))

console.log(obj)
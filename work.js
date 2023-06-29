// // class node{
// //     constructor(value){
// //         this.value=value
// //         this.left=null
// //         this.right=null
// //     }
// // }

// // class bst{
// //     constructor(){
// //         this.root=null
// //     }

// // insert(value){
    
// //     let newnode=new node(value)
// //     if(this.root==null){
// //         this.root=newnode
// //         return this
// //     }
// //     let temp=this.root;
// //     while(true){
// //         if(temp.left==null){
// //             temp.left=newnode
// //             return this
// //         }
        
// //     }

// // }

// // }



// // let arr=[10,10,20,20,30,30,40,40,50,50]
// // for(let i=0;i<arr.length;i++){
// //     if(arr[i]==arr[i+1]){
// //         for(let j=i+1;j<arr.length;j++){
// //             arr[j]=arr[j+1]
// //         }
// //         i--,arr.length--
// //     }
// // }

// // console.log(arr)








// // class node{
// //     constructor(value){
// //         this.value=value
// //         this.left=null
// //         this.right=null
// //     }
// // }

// // class bst{
// //     constructor(){
// //         this.root=null
// //     }

// // addvalue(value){
// // let newnode=new node(value)

// //     if(this.root==null){
// //         this.root=newnode;
// //         return;
// //     }

// // let temp=this.root;

// // while(true){
// //     if(temp.value==value)return undefined

// //     if(value<temp.value){
// //         if(temp.left===null){
// //             temp.left=newnode;
// //             return this
// //         }
// //         temp=temp.left
// //     }
// //     else{
// //     if(temp.right===null){
// //         temp.right=newnode
// //         return this
// //     }
// //     temp=temp.right;
// //     }
// // }




// // }

// // findclosest(target){
// //     let current=this.root
// //     let closestValue=this.root.value

// //     while(current!=null){
        
// //         if(Math.abs(target-current.value) < Math.abs(target-closestValue)){   
// //             closestValue=current.value
// //         }
// //         if(target<current.value){
// //             current=current.left

// //         }
// //         else if(target>current.value){
// //             current=current.right
// //         }

        
// //     }
// //     return closestValue
// // }
// // }


// // let obj=new bst()
// // obj.addvalue(10)
// // obj.addvalue(5)
// // obj.addvalue(15)
// // obj.addvalue(2)
// // obj.addvalue(6)
// // obj.addvalue(13)
// // obj.addvalue(22)

// // console.log(obj.findclosest(14))



// // console.log(obj)


// // let ar=[3,1,2,5]
// // let sum=0

// // for (let i=0;i<ar.length;i++){
// //     sum+=ar[i]
// // }
// // console.log(sum)
// // console.log(ar.length)
// // let length=ar.length
// // let total=Math.floor(length*(length+1)/2)
// // console.log(total)

// // let ans=total-sum
// // console.log(ans)


// // class MaxHeap{
// //     constructor(){
// //     this.heap = []
// //     }
// //   add(value){
// //     this.heap.push(value)
  
// //     let current = this.heap.length-1;
// //     while(current > 0){
// //       let parent = Math.floor((current-1)/2);
// //       if(this.heap[current] < this.heap[parent]){
// //       break;
// //       }
// //       [this.heap[current],this.heap[parent]] = [this.heap[parent],this.heap[current]]
// //       current = parent;
// //     }
// //   }

  
// //   removeMax(){
// //     if(this.heap.length === 0) return null;
// //     if(this.heap.length === 1){
// //       return this.heap.pop();
// //     }
// //     let max = this.heap[0]
// //     this.heap[0] = this.heap.pop()
// //     let current = 0
  
// //     let left = current * 2 + 1;
// //     let right = current * 2 + 2;
// //     let largest = current;
  
// //     while(true){
// //     if(left < current && this.heap[current] > this.heap[largest]){
// //       largest = left;
// //     }
// //     if(right < current && this.heap[current] > this.heap[largest]){
// //       largest = right;
// //     }
// //     if(largest === current){
// //       break;
// //     }
// //     [this.heap[current], this.heap[largest]] = [this.heap[largest], this.heap[current]]
// //     current = largest;
// //   }
// //   return max;
// //   }
// //   }
  
// //   let maxHeap = new MaxHeap()
// //   maxHeap.add(20);
// //   maxHeap.add(50);
// //   maxHeap.add(80);
// //   maxHeap.add(5);
// //   maxHeap.add(10);
// //   maxHeap.add(100);
// //   console.log(maxHeap);
// //   console.log(maxHeap.removeMax())
// //   console.log(maxHeap);





// // let s="loveleetcode"
// //  console.log(firstUniqChar(s))

// //  function firstUniqChar (s) {

// //     for(let i=0;i<s.length;i++){
// //         let count=1

// //         for(let j=0;j<s.length;j++){
// //             if(i!=j && s[i]===s[j]){
// //                 count++
               
// //             }

           
        
// //         }
// //         if(count==1){
// //             return i
          
// //         }
// //         else if(count>1){
// //             return -1
// //         }
       
// //     }
    
// // };
   
    
    

// // class graph{
// //     constructor(){
// //         this.adjacencyList=new Map()
// //     }

// // addvertex(v){
// //     this.adjacencyList.set(v,[])
// // }
// // addEdge(v,e){
// //     this.adjacencyList.get(v).push(e)
// // }


// // }



// // let obj=new graph();
// // obj.addvertex("A")
// // obj.addvertex("B")
// // obj.addvertex("C")
// // obj.addvertex("D")
// // obj.addvertex("E")
// // obj.addEdge("A","B")
// // obj.addEdge("A","c")
// // obj.addEdge("A","d")
// // console.log(obj)





// // class node{
// //     constructor(value){
// //         this.value=value;
// //         this.left=null
// //         this.right=null
// //     }
// // }

// // class bst{
// //     constructor(){
// //         this.root=null;
// //     }

// // Inteert(value){
// //     let newnode=new node(value)
// //     if(this.root==null){
// //         this.root=newnode;
// //         return this
// //     }
// //     let temp=this.root;
// //     while(temp){
// //         if(temp.value===value)return undefined
// //         if(value<temp.value){
// //             if(temp.left===null){
// //                 temp.left=newnode
// //                 return this
// //             }
// //             temp=temp.left
// //         }
// //         else{
// //             if(temp.right===null){
// //                 temp.right=newnode;
// //                 return this
// //             }
// //             temp=temp.right
// //         }
// //     }
// // }

// // contain(value){
// //     if(this.root==null) return false
// //     let temp=this.root;
// //     while(temp){
// //         if(value<temp.value){
// //             temp=temp.left
// //         }
// //         else if(value>temp.value){
// //             temp=temp.right
// //         }
// //         else return true
// //     }
// //     return false
// // }

// // bfs(){
// //  let arr=[];
// //  let queue=[]
// //  let node=this.root
// //  queue.push(node)

// //  while(queue.length){
// //     node=queue.shift();
// //     arr.push(node.value)
// //     if(node.left)queue.push(node.left)
// //     if(node.right)queue.push(node.right)
// //  }
// //  return arr

// // }

// // inorder(){
// //     let arr=[]
// //     let node=this.root;
// //     traverse(node)

// //     function traverse(node)
// // {
// //     if(node.left)traverse(node.left)
// //     arr.push(node.value)
// //     if(node.right)traverse(node.right)

// // }
// // return arr
// // }

// // preorder(){
// //     let arr=[]
// //     let node=this.root
// //     traverse(node)
// //     function traverse(node){
// //         arr.push(node.value)
// //         if(node.left)traverse(node.left)
// //         if(node.right)traverse(node.right)

// //     }
// //     return arr
// // }

// // postorder(){
// //     let arr=[];
// //     let node=this.root;
// //     traverse(node)
// //     function traverse(node){
// //         if(node.left)traverse(node.left)
// //         if(node.right)traverse(node.right)
// //         arr.push(node.value)
// //     }
// //     return arr
// // }

// // find(target){
// // let closestValue=this.root.value;
// // let current=this.root

// // while(current!=null){
// //     if(Math.abs(target-current.value)<Math.abs(target-closestValue)){
// //         closestValue=current.value
// //     }
// //     if(target<current.value){
// //         current=current.left
// //     }
// //     else if(target>current.value){
// //         current=current.right
// //     }
// //     else break;
// // }
// // return closestValue
// // }

// // }




// // let obj=new bst();
// // obj.Inteert(10)
// // obj.Inteert(8)
// // obj.Inteert(12)
// // obj.Inteert(7)
// // obj.Inteert(9)
// // obj.Inteert(11)
// // obj.Inteert(13)
// // console.log(obj.contain(500))
// // console.log(obj)
// // console.log(obj.bfs())
// // console.log(obj.inorder())
// // console.log(obj.preorder())
// // console.log(obj.postorder())
// // console.log(obj.find(6))




// // let arr=[5,32,20,10,8]

// // console.log(heapSort(arr))


// // function heapSort(arr){
// //     let n=arr.length

// //     for(let i=parseInt (n/2);i>=1;i--){
// //         heapify(arr,n,i)
// //     }

// //     return arr
// // }


// // function heapify(arr,n,i){
// //     let smallest=i
// //     let l=i*2;
// //     let r=i*2+1;

// //     if(l<=n && arr[l]<arr[i]){
// //         smallest=l
// //     }
// //     if( r<=n && arr[r]<arr[i]){
// //         smallest=r
// //     }

// //     if(i!=smallest){
// //         [arr[i],arr[smallest]]=[arr[smallest],arr[i]]
// //         heapify(arr,n,smallest)
// //     }
// // }



// // let arr = [15,35,20,10,8,];
 
// // console.log(heapSort(arr))

// // function heapSort(arr){

// //     let n=arr.length
// //     for(let i=parseInt(n/2);i>=1;i--){
// //         heapify(arr,n,i)
// //     }
// // return arr
// // }


// // function heapify(arr,n,i){
// //     let smallest=i
// //     let l=i*2;
// //     let r=i*2+1

// //     if(l<=n && arr[l]<arr[smallest]){
// //         smallest=l
// //     }
// //     if(r<=n && arr[r]<arr[smallest]){
// //         smallest=r
// //     }

// //     if(i!=smallest){
// //         [arr[i],arr[smallest]]=[arr[smallest],arr[i]]
// //         heapify(arr,n,smallest)
// //     }
// // }


// // class node{
// //     constructor(value){
// //         this.value=value
// //         this.left=null
// //         this.right=null
// //     }
// // }

// // class bst{
// //     constructor(){
// //         this.root=null
// //     }


// // addvalue(value){
// //     let newnode=new node(value)
// //     if(this.root==null){
// //         this.root=newnode
// //         return this
// //     }
// //     let temp=this.root
// //     while(temp){
// //         if(value<temp.value){
// //             if(temp.left==null){
// //                 temp.left=newnode
// //                 return this
// //             }
// //             temp=temp.left
// //         }
// //         else{
// //             if(temp.right==null){
// //                 temp.right=newnode
// //                 return this
// //             }
// //             temp=temp.right
// //         }
// //     }
// // }

// // contain(value){
// //     if(this.root==null)return undefined
// //     let temp=this.root
// //     while(temp){
// //         if(value<temp.value){
// //             temp=temp.left
// //         }
// //         else if(value>temp.value){
// //             temp=temp.right
// //         }
// //         else return true
// //     }
// //     return false
// // }

// // bfs(){
// //     let node=this.root;
// //     let queue=[]
// //     let arr=[]
// //     queue.push(node)
// //     while(queue.length){
// //         node=queue.shift()
// //         arr.push(node.value)
// //         if(node.left)queue.push(node.left)
// //         if(node.right)queue.push(node.right)
// //     }
// //     return arr
// // }


// // inorder(){
// //     let node=this.root;
// //     let data=[]
// //     function traverse(node){
// //         if(node.left)traverse(node.left)
// //         data.push(node.value)
// //         if(node.right)traverse(node.right)
// //     }
// //     traverse(node)
// //     return data
// // }


// // findclosest(target){
// //     let closestValue=this.root.value;
// //     let current=this.root;
// //     while(current!=null){
// //         if(Math.abs(target-closestValue)<Math.abs(target-current.value)){
// //             closestValue=current.value
// //         }
// //         if(target<current.value){
// //             current=current.left
// //         }
// //         else if(target>current.value){
// //             current=current.right
// //         }
// //         else break;
        
// //     }
// //     return closestValue
// // }

// // }


// // let obj=new bst();
// // obj.addvalue(50)
// // obj.addvalue(40)
// // obj.addvalue(100)
// // obj.addvalue(200)
// // obj.addvalue(150)
// // console.log(obj.inorder())
// // console.log(obj)





// // let arr=[50,80,10,30,20,70]

// // console.log(heapSort(arr))
// // function heapSort(arr){
// //     let n=arr.length;
// //     for(let i= parseInt(n/2);i>=1;i--){
// //         heapify(arr,n,i)
// //     }
// //     return arr
// // }

// // function heapify(arr,n,i){
// //     let largest=i
// //     let l=i*2;
// //     let r=i*2+1
// //     if(l<=n && arr[l]<arr[largest]){
// //         largest=l;
// //     }
// //     if(r<=n && arr[r]<arr[largest]){
// //         largest=r
// //     }
// //     if(i!=largest){
// //         [arr[largest],arr[i]]=[arr[i],arr[largest]]
// //         heapify(arr,n,largest)
// //     }
// // }

// // rec(i=1)





// // class node{
// //     constructor(value){
// //         this.value=value
// //         this.left=null
// //         this.right=null
// //     }
// // }

// // class bst{
// //     constructor(){
// //         this.root=null
// //     }
    
// // insert(value){
// //     let newnode=new node(value);
// //     if(this.root==null){
// //         this.root=newnode
// //         return this
// //     }
// //     let temp=this.root;
// //     while(true){
// //         if(value<temp.value){
// //             if(temp.left==null){
// //                 temp.left=newnode
// //                 return this
// //             }
// //             temp=temp.left
// //         }
// //         else{
// //             if(temp.right==null){
// //                 temp.right=newnode
// //                 return this
// //             }
// //             temp=temp.right
// //         }
// //     }
// // }

// // inorder(){
// //     let arr=[]
// //     let temp=this.root
// // if(temp!=null){
   
// //     let temp=this.root
// //     traverse(temp)
// //     function traverse(temp){
// //         if(temp.left)traverse(temp.left)
// //         console.log(temp.value)
// //         if(temp.right)traverse(temp.right)
// //     }
// // }
// // return arr
// // }

// // }


// // let obj=new bst()

// // obj.insert(50)
// // obj.insert(40)
// // obj.insert(60)
// // obj.insert(45)
// // obj.insert(65)
// // obj.insert(55)
// // obj.insert(35)
// // console.log(obj.inorder())
// // console.log(obj)




// // let arr=[4,3,2,7,8,2,3,1,0]

// // let  result=[]

// // for(let i=1;i<arr.length;i++){
// //     let count=0
// // for(var j=0;j<arr.length;j++){
// //     if(arr[j]==i){
// //         count++
// //     }

    
// // }
// // if(count==0){
// //     result.push(i)
// // }
// // }


// // console.log(result)



// // class node{
// //     constructor(value){
// //         this.value=value
// //         this.left=null
// //         this.right=null
// //     }
// // }

// // class bst{
// //     constructor(){
// //         this.root=null
// //     }

// // addvalue(value){
// //     let newnode=new node(value)
// //     if(this.root==null){
// //         this.root=newnode;
// //         return this
// //     }
// //     let temp=this.root
// //     while(node){
// //         if(value<temp.value){
// //             if(temp.left==null){
// //                 temp.left=newnode;
// //                 return
// //             }else{
// //                 temp=temp.left
// //             }

// //         }else{
// //             if(temp.right==null){
// //                 temp.right=newnode;
// //                 return
// //             }
// //             temp=temp.right
// //         }
// //     }
// // }

// // contain(value){
// //     if(this.root==null) return false
// //     let temp=this.root
// //     while(temp){
// //         if(value<temp.value){
// //             temp=temp.left
// //         }
// //         else if(value>temp.value){
// //             temp=temp.right
// //         }
// //         else return true
// //     }
// //     return false
// //     }


// // findclosest(value){

// // }

// // }




// // let obj=new bst();
// // obj.addvalue(50)
// // obj.addvalue(60)
// // obj.addvalue(40)
// // obj.addvalue(55)
// // obj.addvalue(45)
// // obj.addvalue(65)

// // console.log(obj.contain(40))

// // console.log(obj)


// // let arr=[]
// // var twoSum = function(nums, target) {
// //     for(let i=0;i<nums.length-1;i++){
// //         for(let j=1;j<nums.length;j++){
// //             if(nums[i]+nums[j]==target){
// //                 arr.push(i,j)
// //                 return arr
// //             }
// //         }
// //     }
    
// // };

// // let num=[3,2,2,3]
// // // let target=9
// // // console.log(twoSum(num,target))

// // for(let i=0;i<num.length;i++){
// //     let count=0
// //     for(let j=i+1j<num.length;j++){
// //         if(num[i]==num[j]){
// //             count++
// //         }
// //     }
// // }


// // class heap{
// //     constructor(){
// //         this.data=[50,40,30,35,32,25,20]
// //     }

// // addvalue(value){
// //     this.data.push(value)
// //     this.heapify()
// // }

// // heapify(){

// //     let index=this.data.length-1;
// //     let value=this.data[index]
   
// //     while(index>0){
// //         let parentidx=Math.floor((index-1)/2)
// //     let parent=this.data[parentidx]
// //         if(value<parent) break;
        
            
// //                 this.data[index]=parent;
// //                 this.data[parentidx]=value
// //                 index=parentidx
// //     }
// //     }



// // }




// // let a=[1,2,3]
// // let b=[2,4,6];
// // let sum=[]
// // for(let i=0;i<a.length;i++){
// //     for(let j=0;j<b.length;j++){
        
// //         if(a[i]===b[j]){
// //             a[i]=a[i+1];
// //             b[j]=b[j+1]
// //             b[j+1]=b[j+2]
// //             a.length--;
// //             b.length--
        
// //         }
// //         console.log(a)
// //     }

// // }
// // sum.push(a,b)

// // console.log(sum)



// // class node{
// //     constructor(){
// //         this.children=new Map();
// //         this.end=false
// //     }
// // }

// // class Trie{
// //     constructor(){
// //         this.root=new node();
// //     }

// // addword(word){
// //     let current=this.root;
// //     for (let   letter of word) {
// //         if(!current.children.has(letter)){
// //             current.children.set(letter,new node())
// //         }
// //         current=current.children.get(letter)
// //     }
// //     current.end=true
// // }

// // serach(word){
// //     if(!word.length) return false

// //     let current=this.root;
// //     for(let letter of word){
// //         if(!current.children.has(letter))return false;
// //         current=current.children.get(letter)
// //     }
// //     return current.end;
// // }

// // startwith(prefix){
// //     let current= this.root;
// //     if(!prefix.length) return false

// //     for(let letter of prefix ){
// //         if(!current.children.has(letter)) return false
// //         current=current.children.get(letter)
// //     }
// //     return true
// // }

// // }



// // let obj=new Trie();
// // obj.addword("rahul")

// // console.log(obj.serach("rahu"))
// // console.log(obj)



// // class graph{
// //     constructor(){

// //         this.adjajencylist=new Map();

// //     }
// // addvertex(v){
// //     this.adjajencylist.set(v,[])
// // }
// // addedge(v,e){
// //     this.adjajencylist.get(v).push(e)
// //     this.adjajencylist.get(e).push(v)
// // }

// // dfs(v){
// //     let queue=[];
// //     queue.push(v)
// //     while(queue.length>0){
// //         let visited=this.adjajencylist.get(v)
// //         for(let i of visited){
// //             queue.push(i)
// //         }
// //         return queue
// //     }
    
// // }

// // }

// // let obj=new graph();

// // obj.addvertex("A")
// // obj.addvertex("B")
// // obj.addvertex("C")
// // obj.addvertex("D")
// // obj.addvertex("E")
// // obj.addedge("A","B")
// // obj.addedge("D","C")
// // obj.addedge("A","E")
// // console.log(obj.dfs("A"))
// // console.log(obj)






// // class node{
// //     constructor(value){
// //         this.value=value;
// //         this.left=null
// //         this.right=null
// //     }
// // }

// // class bst{
// //     constructor(){
// //         this.root=null;
// //     }

// // addnode(value){
// //     let newnode=new node(value);
// //     if(this.root==null){
// //         this.root=newnode;
// //         return this
// //     }
// //     let temp=this.root;

// //     while(temp){
// //         if(value<temp.value){
// //             if(temp.left==null){
// //                 temp.left=newnode;
// //                 return this
// //             }
// //             temp=temp.left
// //         }
// //         else{
// //             if(temp.right==null){
// //                 temp.right=newnode;
// //                 return this
// //             }
// //             temp=temp.right
// //         }
// //     }
// // }


// // height(current){
   
    
// //         if(current==null)return 0
// //         else{
// //         let left=this.height(current.left)
// //         let right=this.height(current.right)
// //         return Math.max(left,right)+1
        
// // }
// // }
// // }



// // let obj=new bst();
// // obj.addnode(50)
// // obj.addnode(40)
// // obj.addnode(60)
// // obj.addnode(45)
// // obj.addnode(65)
// // obj.addnode(35)
// // obj.addnode(55)
// // obj.addnode(20)
// // console.log(obj.height(obj))

// // console.log(obj)




// // function findLucky(arr) {
// //     let luckyNums = [];
// //     for (let i = 0; i < arr.length; i++) {
// //       let frequency = 0;
// //       for (let j = 0; j < arr.length; j++) {
// //         if (arr[i] === arr[j]) {
// //           frequency++;
// //         }
// //       }
// //       if (frequency === arr[i]) {
// //         luckyNums.push(arr[i]);
// //       }
// //     }
// //     if (luckyNums.length === 0) {
// //       return -1;
// //     } else {
// //       return Math.max(...luckyNums);
// //     }
// //   }
  
// //   let arr = [1,1, 2, 3, 3];
// //   console.log(findLucky(arr));




// // class graph{
// //     constructor(){
// //         this.adjacencylist=new Map();
// //     }

// // addvertex(v){
// //     this.adjacencylist.set(v,[]);
// // }

// // addEdge(v,e){
// //     this.adjacencylist.get(v).push(e);
// //     this.adjacencylist.get(e).push(v)
// // }

// // bfs(v){
// //    let q=[];
// //    let visited=[];
// //    let keys=this.adjacencylist.keys();
// //    for(let e of keys){
// //     visited[e]=false
// //    }
// //    q.push(v)
// //    while(q.length>0){
// //     let element=q.shift();
// //     visited[element]=true
// //     console.log(element)
// //     let list=this.adjacencylist.get(element)
// //     for(let edata in list){
// //         let e=list[edata]
// //         if(!visited[e]){
// //             q.push(e)
// //             visited[e]=true
// //         }
// //     }
// //    }
   
// // }

// // dfs(v){
// //     let visited=[];
// //     let keys=this.adjacencylist.keys();
// //     for(let i of keys){
// //         visited[i]=false
// //     }
// //     this. traverse(v,visited)
// // }
    
// //      traverse(v,visited){
// //         visited[v]=true;
// //         console.log(v)
// //         let elist=this.adjacencylist.get(v)
// //         for(let e of elist){
// //             if(!visited[e]){
// //                 visited[e]=true;
// //                 this.traverse(e,visited)
// //             }
// //         }
// //     }
// // }



// // let obj=new graph();
// // obj.addvertex("A")
// // obj.addvertex("B")
// // obj.addvertex("C")
// // obj.addvertex("D")
// // obj.addvertex("E")
// // obj.addvertex("F")

// // obj.addEdge("A","E")
// // obj.addEdge("B","C")
// // obj.addEdge("F","A")
// // obj.dfs("A")
// // obj.bfs("A")
// // console.log(obj)



// // class node{
// //     constructor(value){
// //         this.value=value
// //         this.left=null
// //         this.right=null
// //     }
// // }

// // class bst{
// //     constructor(){
// //         this.root=null

// //     }

// // insert(value){
// //     let newnode=new node(value)
// //     if(this.root==null){
// //         this.root=newnode
// //         return this
// //     }
// //     let temp=this.root;
// //     while(temp){
// //         if(value<temp.value){
// //             if(temp.left==null){
// //                 temp.left=newnode;
// //                 return this
// //             }
// //             temp=temp.left
// //         }
// //         else{
// //             if(temp.right==null){
// //                 temp.right=newnode;
// //             return this
// //             }
// //             temp=temp.right
// //         }
// //     }
// // }

// // contain(value){
// //     if(value==null)return false
// //     let temp=this.root;
// //     while(temp){
// //         if(value<temp.value){
// //             temp=temp.left
// //         }
// //         else if(value>temp.value){
// //             temp=temp.right
// //         }
// //         else return true
// //     }
// //     return false 
// // }

// // findclosest(value){
// //     let current=this.root
// //     let currentvalue=this.root.value

// //     while(current){
// //         if(Math.abs(current.value-value)<Math.abs(currentvalue-value)){
// //             currentvalue=current.value
// //         }

// //         if(value<current.value){
// //             current=current.left
// //         }
// //         if(value>current.value){
// //             current=current.right
// //         }
// //         else break;
// //     }
// //     return closestValue
// // }

// // }



// // let obj=new bst();
// // obj.insert(50)
// // obj.insert(40)
// // obj.insert(60)
// // obj.insert(30)
// // obj.insert(70)
// // obj.insert(20)
// // obj.insert(65)
// // console.log(obj.contain())

// // console.log(obj)



// // class maxheap{
// //     constructor(){
// //         this.data=[]
// //     }
    
// // addvalue(value){
// //     this.data.push(value)
// //     this.heapify();
// // }

// // heapify(){
// //     let index=this.data.length-1;
// //     let value=this.data[index]
// //     while(index>0){
// //         let parentindex=Math.floor((index-1)/2)
// //         let parent=this.data[parentindex]
// //         if(value<parent)break
    
// //             this.data[index]=parent;
// //             this.data[parentindex]=value;
// //             index=parentindex

        
// //     }
// // }
// // }


// // let obj=new maxheap();
// // obj.addvalue(50)
// // obj.addvalue(60)
// // obj.addvalue(100)
// // obj.addvalue(10)
// // obj.addvalue(70)
// // obj.addvalue(30)
// // console.log(obj)




// // class node{
// //     constructor(){
// //         this.children=new Map();
// //         this.end=false
// //     }
// // }

// // class Trie{
// //     constructor(){
// //         this.root =new node();
// //     }

// // addword(word){
// //     let current=this.root
// //     for(let char of word){
// //         if(!current.children.has(char)){
// //             current.children.set(char,new node())
// //         }
// //         current=current.children.get(char)
// //     }
// //     current.end=true
// // }

// // search(word){
// //     let current=this.root
// //     for(let char of word){
// //         if(!current.children.has(char))return false

// //         current=current.children.get(char)
// //     }
// //     return current.end
// // }
// // startwith(prefix){
// // let current=this.root;
// // for(let char of prefix){
// //     if(!current.children.has(char))return false
// //     current=current.children.get(char)
// // }
// // return true
// // }
// // }


// // let obj=new Trie();
// // obj.addword("Rahul")
// // console.log(obj.startwith("Rah"))




// class graph{
//     constructor(){
//         this.adjacencylist=new Map();

//     }

// addvertex(v){
//     this.adjacencylist.set(v,[])
// }
// addedge(v,e){
//     this.adjacencylist.get(v).push(e)
//     this.adjacencylist.get(e).push(v)
// }

// bfs(v){
//     let q=[];
//     let visited=[];
//     let keys=this.adjacencylist.keys();
//     for( let v of keys){
//         visited[v]=false
//     }
//     q.push(v)
//     while(q.length){
//         let element=q.shift();
//         visited[element]=true
//         console.log(element)
//         let list =this.adjacencylist.get(element)
//         for(let e of list){
//             if(!visited[e]){
//                 q.push(e)
//                 visited[e]=true
//             }
//         }
//     }
// }


// dfs(v){
//     let visited=[]
//     let keys=this.adjacencylist.keys();
//     for(let v of keys){
//         visited[v]=false
//     }
//     this.traverse(v,visited)

// }
//     traverse(v,visited){
//         visited[v]=true;
//         console.log(v)
//         let elist=this.adjacencylist.get(v)
//         for(let e of elist){
//             if(!visited[e]){
//                 visited[e]=true;
//                 this.traverse(e,visited)
//             }
//         }
//     }
// }





// let obj=new graph();
// obj.addvertex("A")
// obj.addvertex("B")
// obj.addvertex("C")
// obj.addvertex("D")
// obj.addvertex("E")
// obj.addvertex("F")
// obj.addvertex("G")
// obj.addedge("A","B")
// obj.addedge("A","B")
// obj.addedge("C","D")
// obj.addedge("D","E")
// obj.bfs("A")
// obj.dfs("A")
// console.log(obj)










// class tree{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }


// mirror(node){

//    if (node.right){
//      this.left=node.value
//     }
//     if(node.left){
//         this.right=node.value
//     }
// }

// }


// let root=new tree(50);
// root.left=new tree(40)
// root.right=new tree(30)




// let str=x
// console.log(palindrome(str))
// function palindrome(str){
// let len=str.length
// for(let i=0;i<len/2;i++){
//     if(str[i]!=str[len-1-i]){
//         return false
       
        
//     }

// }
// return true

// }



// let str="hello word"
// console.log(countSegments(str))
// function countSegments(s) {
//     let count = 0;
//     console.log(s.length)
//     for (let i = 0; i < s.length; i++) {
//       // Check if current character is a non-space character and the next character is a space character
//       if (s[i] !== " " && (i === s.length - 1 || s[i+1] === " ")) {
//         count++;
        
//       }
//     }
//     return count;
//   }











//   let arr=[1,2,3,4,5]


// let result=1

// function product(arr){
//   let result=1
// for(let i=0;i<arr.length;i++){
//     result=result*arr[i]
  
// }

//     if(result<0){
//         return -1
//     }
//     else if(result>0){
//         return 1
//     }
//     else return 0
//   }

//   console.log(product(arr))








  

// let a=10

// const b=100;

// var c=5;

// b=500


// function sum(){
//   let a=10;




// }
// let arr=[]
// function prime(n){

// if(n<2)return false

// for(let i=2;i<n;i++){
//   if(n%i==0){
//     return false
//   }
// }
// return true
// }


// for(let i=0;i<=10;i++){
//    if(prime(i)==true){
//     arr.push(i)
//    }
// }

// console.log(arr)

// for(let i=arr.length-1;i>=0;i--){
//   console.log(arr[i])
// }





// let arr=[2000,1000,4000,3000]

// arr.sort((a,b)=>a-b)
// console.log(arr)

// let min=arr[0]
// let max=arr[arr.length-1]
// console.log(arr.length)
// let len=arr.length-2

// let total=0
// for(let i=0;i<arr.length;i++){
//   if(arr[i]!=min && arr[i]!=max){
//     total+=arr[i]
//   }
// }
// console.log(total)

// let result=total/len
// console.log(result)








// let salary=[2000,1000,4000,3000]
// salary.sort((a,b)=>a-b)

// salary.pop()
// salary.shift()

// let len=salary.length
// let sum=0

// salary.forEach(element => {
//   sum+=element
// });

// console.log( sum/len)

 
// class node{
//   constructor(value){
//     this.value=value
//     this.left=null
//     this.right=null
//   }
// }

// class bst{
//   constructor(){
//     this.root=null
//   }
// addvalue(value){
//   let newnode=new node(value)
//   if(this.root==null){
//     this.root=newnode;
//     return this
//   }
//   let temp=this.root
//   while(temp){
//     if(value<temp.value){
//       if(temp.left==null){
//         temp.left=newnode
//         return this
//       }
//       temp=temp.left
//     }
//     else{
//       if(temp.right==null){
//         temp.right=newnode
//         return this
//       }
//       temp=temp.right
//     }
//   }
// }

// findvalue(value){
//   if(value==null)return false
//   let current=this.root
//   if(current==null)return false
//   while(current){
//     if(value<current.value){
//       current=current.left
//     }
//    else  if(value>current.value){
//       current=current.right
//     }
//     else return true
//   }
//   return false

// }

// bfs(){
//   let node=this.root
//   let queue=[]
//   queue.push(node)
//   while(queue.length){
//      node=queue.shift()
//     console.log(node.value)
//     if(node.left)queue.push(node.left)
//     if(node.right)queue.push(node.right)
//   }

// }

// inorder(){
//   let current=this.root
//   traverse(current)
//   function traverse(current){
//     if(current.left)traverse(current.left)
//     console.log(current.value)
//     if(current.right)traverse(current.right)
//   }
// }

// preorder(){
//   let current=this.root
//   traverse(current)
//   function traverse(current){
//     console.log(current.value)
//     if(current.left)traverse(current.left)
    
//     if(current.right)traverse(current.right)
//   }
// }

// porstorder(){
//   let current=this.root
//   traverse(current)
//   function traverse(current){
//     if(current.left)traverse(current.left)
//     if(current.right)traverse(current.right)
//     console.log(current.value)
//   }
// }

// left(){
//   let node=this.root
//   traverse(node)
//    function traverse(node){
//     if(node.value<50){
//       console.log(node.value)
//     }
//     if(node.left)traverse(node.left)
    
//    }
// }
// }


// let obj=new bst()

// obj.addvalue(50)
// obj.addvalue(40)
// obj.addvalue(45)
// obj.addvalue(35)
// obj.addvalue(60)
// obj.addvalue(55)
// obj.addvalue(65)
// obj.inorder()
// obj.preorder()
// obj.porstorder()
// console.log(obj.findvalue(55))
// obj.bfs()
// console.log(obj)


// class node{
//   constructor(){
//       this.children=new Map()
//       this.end=false
//   }
// }
// class trie{
//   constructor(){
//       this.root=new node()
//   }
  
// addword(word){
//   let current=this.root
//   for(let char of word){
//       if(!current.children.has(char)){
//           current.children.set(char,new node())
//       }
//       current=current.children.get(char)
//   }
//   return current.end=true
// }

// searchword(word){
//   let  current=this.root
//   for(let char of word){
//       if(!current.children.has(char))return false
//       current=current.children.get(char)
//   }
//   return  current.end
// }

// startwith(prefix){
//   let current=this.root
//   for(let char of prefix){
//       if(!current.children.has(char))return 
//       current=current.children.get(cahr)
//   }
//   return true
// }
// }



// let obj =new trie()
// obj.addword("rahul")

// console.log(obj.searchword("rahul"))




// class minheap{
//   constructor(){
//       this.data=[]
//   }
// addvalue(value){
//   this.data.push(value)
//   this.heapify()
// }

// heapify(){
//   let index=this.data.length-1;
//   console.log(index)
//   let value=this.data[index]
  
//   while(index>0){
//       let parentindex=Math.floor((index-1)/2)
//       let parent=this.data[parentindex]
//       console.log(parentindex)
//       console.log(parent)
//       if(value>parent)break

//       this.data[index]=parent 
//     this.data[parentindex]=value
    
//       index=parentindex
//   }
  
// }
// }

// let arr=[50,10,30,40,90,5]

// let obj=new minheap();
// for(let i of arr){
//   obj.addvalue(i)
// }

// console.log(obj)





// let arr=[1,0,2,3,0,4,5,0]


// for(let i=0;i<arr.length;i++){
  
//   if(arr[i]===0){
//     for(let j=arr.length-1;j>=i;j--){
//       arr[j+1]=arr[j]
      
//     }
//     arr[1+1]=0
//     arr.length--
//     i++
    
//   }
 
  
// }
// console.log(arr)


// class tree{
//   constructor(value){
//     this.value=value
//     this.left=null
//     this.right=null
//   }


// mirror(node){
//   if(node==null)return

//  let  temp=node.left
//   node.left=node.right
//   node.right=temp

//   this.mirror(node.left)
//   this.mirror(node.right)
// }
// }

// let obj=new tree()
// let root=new tree(50)
// root.left=new tree(40)
// root.right=new tree(30)

// console.log(root)

// obj.mirror(root)
// console.log(root)





// class graph{
//   constructor(){
//     this.adjacencylist=new Map()
//   }

// addvertex(v){
//   this.adjacencylist.set(v,[])
// }
// addedge(v,e){
//   this.adjacencylist.get(v).push(e)
//   this.adjacencylist.get(e).push(v)
// }

// findcycle(){
// let visited=new Set()
// for(let vertex of this.adjacencylist.keys()){
//     if(!visited.has(vertex)){
//       if(this.dfs(vertex,null,visited)){
//         return true
//       }
//     }
//     return false
// }

// }
// dfs(vertex,parent,visited){
//   visited.add(vertex)
//   for(let n of this.adjacencylist.get(vertex)){
//     if(!visited.has(n)){
//       if(this.dfs(n,vertex,visited)){
//         return true
//       }
//     }
//   }
//   return false

// }
// }



// let obj=new graph()

// obj.addvertex("A")
// obj.addvertex("B")
// obj.addvertex("C")
// obj.addvertex("D")

// obj.addedge("A","B")
// obj.addedge("B","C")
// obj.addedge("C","D")
// obj.addedge("A","C")



// console.log(obj)

// console.log(obj.findcycle())





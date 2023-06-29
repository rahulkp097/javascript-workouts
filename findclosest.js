class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BST {
    constructor(rootValue) {
      if (rootValue !== undefined) {
        this.root = new Node(rootValue);
      } else {
        this.root = null;
      }
    }
  
    insert(value) {
      const newNode = new Node(value);
      if (this.root === null) {
        this.root = newNode;
        return this;
      }
      let temp = this.root;
      while (true) {
        if (newNode.value === temp.value) {
          return undefined;
        }
        if (newNode.value < temp.value) {
          if (temp.left === null) {
            temp.left = newNode;
            return this;
          }
          temp = temp.left;
        } else {
          if (temp.right === null) {
            temp.right = newNode;
            return this;
          }
          temp = temp.right;
        }
      }
    }
    findClosestValue(target) {
      let closestValue = this.root.value;
      let current = this.root;
    
      while (current !== null) {
     
        if (Math.abs(target - current.value) < Math.abs(target - closestValue))
         {
        
          closestValue = current.value;
      
        }
    
        if (target < current.value) {
          current = current.left;
        } else if (target > current.value) {
          current = current.right;
        } else {
          break;
        }
      }
      return closestValue;
    }



  }
  
  const myBST = new BST(800);
  myBST.insert(100);
  myBST.insert(200);
  myBST.insert(50);
  myBST.insert(55);
  myBST.insert(180);
  myBST.insert(850);
  
  const closestValue = myBST.findClosestValue(80);
  console.log(closestValue);
  

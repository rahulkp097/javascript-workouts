class minheap{
    constructor(){
        this.data=[]
    }

left(i){
    return i*2+1
}
right(i){
    return i*2+2
}
parent(i){
    return Math.floor((i-1)/2)
}
getmin(i){
    return this.data[0]
}
insert(value){
    let arr=this.data
    let i=arr.length-1
    while(i>0 && arr[i]<arr[this.parent(i)]){
        let p=this.parent(i)
        [arr[i],arr[p]]=[arr[p],arr[i]]
        i=p
    }
}


}
let word="english"
function palindrome(word){
let len=word.length-1;
let msg="its a palindrome"
for(let i=0;i<Math.floor(len/2);i++){
    if(word[i]!=word[len-i]){
        msg="not a palindrome"
    }
}

return msg
}

console.log(palindrome(word))



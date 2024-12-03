function PalindromeInt(arr){
    arr.forEach((num) =>{
        if(num == Number(num.toString().split('').reverse().join(''))) console.log("true")
        else console.log("false")
         }, 0)
}
let word = ['first'];


// let result = word.forEach(element => {
//      let  newArr = element.split('');
//       let reverseArr  = newArr.reverse();
//        if (reverseArr === newArr) {
//         return true
//        }
//        return false 
// })

// console.log(result)




function isPalindrome(str) {
 for (let i = 0; i < str.length / 2; i++) {
  let frontLetter = str[i];
  let backLetter = str[str.length -1 - i];
   if (frontLetter !== backLetter) {
   return false
}
}
return true
}


//  console.log(isPalindrome('Racecar'))

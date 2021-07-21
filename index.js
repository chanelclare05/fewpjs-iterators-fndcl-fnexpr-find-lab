function superbowlWin(arr){
   if (arr.find(({result}) => result === "W")) {
       return (arr.find(({result}) => result === "W").year)
   } else {
       return undefined}
   }


// function superbowlWin(arr){
//     return (arr.find(({result}) => result === "W")).year
//  }
 
 
 
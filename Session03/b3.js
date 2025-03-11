function check(arr) {
    if (!Array.isArray(arr)) {
      return "Dữ liệu không hợp lệ";
    }
  
    let numberArray = []; 
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === +arr[i] && arr[i] % 2 === 0) { 
        numberArray.push(arr[i]);
      }
    }
  
    if (numberArray.length === 0) {
      return "Mảng không chứa số chẵn";
    }
    return numberArray.join(", "); 
  }
console.log(check([11,4,65,6]));  
console.log(check([1,3,5,17]));   
console.log(check("text"));          
  
function total(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        return a + b;

    } else {
        return " Dữ liệu không hợp lệ"
    }
    
} 
console.log(total(2,6));       
console.log(total(3,"text"));  
console.log(total(7,-7));      
console.log(total(4.5,3));
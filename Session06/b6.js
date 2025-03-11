function isPalindrome(str) {
    let i = 0;
    let j = str.length - 1;

    while (i < j) {
        if (str[i] !== str[j]) {
            return false; 
        }
        i++;
        j--;
    }
    return 1; 
}

let charInput = prompt("Nhập một chuỗi để kiểm tra đối xứng");

if (charInput === null || charInput.length === 0) {  
    console.log("Vui lòng nhập một chuỗi hợp lệ");
} else {
    if (isPalindrome(charInput)) {
        console.log("Là chuỗi đối xứng");
    } else {
        console.log("Không phải chuỗi đối xứng");
    }
}

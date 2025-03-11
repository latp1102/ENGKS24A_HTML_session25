function check(str) {
    let result = ""; 
    let dem = 1; 

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (dem && char !== " ") { 
            result += char.toUpperCase(); 
            dem = 0;
        } else {
            result += char.toLowerCase(); 
        }

        if (char === " ") {
            dem = 1; 
        }
    }
    return result;
}
console.log(check("hello WORLD"));      
console.log(check("rIKKei acaDEMy"));  

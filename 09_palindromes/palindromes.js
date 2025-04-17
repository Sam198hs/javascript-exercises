const palindromes = function (string) {
 const clean = string.toLowerCase().replace(/[^a-z0-9]/g, '');

    let reversed = clean.split("").reverse().join("");
    if (reversed === clean){
        return true;
    }else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;

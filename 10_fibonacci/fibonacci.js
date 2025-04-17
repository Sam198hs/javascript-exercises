const fibonacci = function(n) {
 let total = 0;
    if (n < 0)  return "OOPS";
    
    n = Number(n);
    let a = 0, b = 1;
    for(let i = 1; i < n; i++){
       let next = a+b;
        a = b;
        b = next;
    }

 return n === 0 ? 0 : b;
};

// Do not edit below this line
module.exports = fibonacci;

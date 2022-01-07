var x=0;  
var y=1;  
var z=-1;  
//is Integer method
console.log(Number.isInteger(x)); 

//isFinite method
console.log(Number.isFinite(x));  

//parse float method

var a="50";  
var b="50.25"  
var c="String";  
var d="50String";  
var e="50.25String"  
console.log(Number.parseFloat(a));  
console.log(Number.parseFloat(b));  
console.log(Number.parseFloat(c));  
console.log(Number.parseFloat(d));  
console.log(Number.parseFloat(e)); 

a="50";  
b="50.25"  
c="String";  
d="50String";  
e="50.25String";  
console.log(Number.parseInt(a));  
console.log(Number.parseInt(b));  
console.log(Number.parseInt(c));  
console.log(Number.parseInt(d));  
console.log(Number.parseInt(e));
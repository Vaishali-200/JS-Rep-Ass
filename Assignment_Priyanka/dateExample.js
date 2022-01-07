var today=new Date();  
console.log(today);

//another code to print date month and year

var day=today.getDate();  
var month=today.getMonth()+1;  
var year=today.getFullYear();  
console.log(day);
console.log(month);
console.log(year);

//to print current time
var h=today.getHours();  
var m=today.getMinutes();  
var s=today.getSeconds();  
console.log(h+":"+m+":"+s);  

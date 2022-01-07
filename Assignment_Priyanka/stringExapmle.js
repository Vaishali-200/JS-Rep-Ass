var str ="Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
console.log(pos);

str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");
console.log(pos);

str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);
console.log(res);

str = "Please visit Mumbai!";
var n = str.replace("Mumbai", "Pune");
console.log(n);
var text1 = "Hello World!";       
var text2 = text1.toUpperCase(); 
console.log(text2);

var text1 = "Hello World!";       
var text2 = text1.toLowerCase();  
console.log(text2);


var text = "Hello" + " " + "Welcome to Vyom Labs!";
console.log(text);
var textNew = "Hello".concat(" ", "Welcome to Vyom Labs!!");
console.log(textNew);
str = "       Hello World!        ";
/*strNew=str.trim();
console.log(strNew);*/
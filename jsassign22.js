var a=10,b=10;
function myLoop() {
setTimeout(function() {
var result=a+b;
{
console.log('Addition is :'+result);
//myLoop(result);
}
}, 5000)
}

myLoop();
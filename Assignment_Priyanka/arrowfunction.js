//Arrow function in Java Script
function isEven(element){
if(element % 2 === 0){
return true;
}
return false;

}
//console.log(isEven(3));

/*function isEven(element){
    return element%2===0;
}
console.log(isEven(8));*/

/*var isEven =(element)=>{
    return element%2===0;
}
console.log(isEven(11));*/

var result=[10,12,16,18].every(isEven);
console.log(result);
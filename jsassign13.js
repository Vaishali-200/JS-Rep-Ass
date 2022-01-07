const array1 = [10, 30, 20];
var sum=array1.reduce(function(a,b){
return a+b;
},0);
var avg=sum/array1.length;
console.log('Maximum Number :' +Math.max(...array1));
console.log('Minimum Number :' +Math.min(...array1));
console.log('Sum of Numbers :' +sum);
console.log('Average of Numbers :'+avg);
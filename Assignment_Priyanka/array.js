var emp=new Array("suresh","ramesh","rajesh");  
for(i=0;i<emp.length;i++){
  console.log(emp[i]);
}
//adding an item to end of an array
let newlength=emp.push("sachin");

console.log(newlength);
//remove an item from end of the array
let last=emp.pop();
for(i=0;i<emp.length;i++){
  console.log(emp[i]);
}
//removing an element from beginning of an array
let first=emp.shift();   //it will remove suresh from array

//add an item to the beginning of an array
newlength=emp.unshift("amol");
P
var arr=["c","c++","java","salesforce","Apex"];
arr.forEach(function(fetch){
console.log(fetch);
});

//reversing array elements
arr.reverse();
arr.forEach(function(fetch){
  console.log(fetch);
  });
  
//finds the index of an item in the array
let pos=emp.indexOf("ramesh");
console.log(pos);

//sorting array elements

var arr=["AngularJS","Node.js","JQuery","Bootstrap"]  
var result=arr.sort();  
console.log(result);  
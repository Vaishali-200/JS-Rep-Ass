//another example
function addTwoNumberFunctions(functionOne, functionTwo) {
    var functionAdditionResult = functionOne() + functionTwo();
    return functionAdditionResult;
}

function functionOneHundred() { return 100; }

function functionTwoHundred() { return 200; }

var result=addTwoNumberFunctions(functionOneHundred, functionTwoHundred);
console.log("result="+result);

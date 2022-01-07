/*async function hello() { return "Hello" };
var result=hello();
console.log(result);
*/
async function sampleFunction() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 3000)
    });
  
    let result = await promise; // wait until the promise resolves (*)
  
    console.log(result) // "done!"
  }
  
  sampleFunction();
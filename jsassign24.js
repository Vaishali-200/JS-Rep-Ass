async function sampleFunction() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("await promise done!"), 3000)
    });
  
    let result = await promise; // wait until the promise resolves (*)
  
    console.log(result) // "done!"
  }
  
  sampleFunction();
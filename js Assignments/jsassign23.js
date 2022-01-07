var promise = new Promise(function(resolve,reject){
    const x="Anand";
    const y="Anand";
    if(x === y){
        resolve();
    }else{
        reject();
    }
});

promise.
        then(function (){
            console.log("success");
        }).
        catch(function (){
            console.log("reject");
        });
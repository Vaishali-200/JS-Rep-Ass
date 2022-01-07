var promise = new Promise(function(resolve,reject){
    const x="Shraddha";
    const y="ShradDha";
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
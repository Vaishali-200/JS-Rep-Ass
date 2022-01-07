var promise = new Promise(function(resolve, reject) {
    const x = "Vyom Labs";
    const y = "Vyom Labs Pvt Ltd"
    if(x === y) {
        resolve();
    } else {
        reject();
    }
    });
    
    promise.
        then(function () {
            console.log('Success, You called promise');
        }).
        catch(function () {
            console.log('Some error has occured');
        });
    
//promise using resolve
/*var promise = new Promise(function(resolve, reject) {
	resolve('Hello welcome to Vyom Labs');
})

promise
	.then(function(successMessage) {
	//success handler function is invoked
		console.log(successMessage);
	}, function(errorMessage) {
		console.log(errorMessage);
	})*/

    //promise rejected
    /*var promise = new Promise(function(resolve, reject) {
        reject('Promise Rejected')
    })
    
    promise
        .then(function(successMessage) {
            console.log(successMessage);
        }, function(errorMessage) {
        //error handler function is invoked
            console.log(errorMessage);
        })*/
    

//promise using catch


var promise = new Promise(function(resolve, reject) {
	throw new Error('Some error has occured')
})

promise
	.then(function(successMessage) {
		console.log(successMessage);
	})
	.catch(function(errorMessage) {
	//error handler function is invoked
		console.log(errorMessage);
        
	});

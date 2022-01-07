var array_first = [1,5,10,50,12, 6];
    var array_second = [1,-4,66,2,12,15];
    var array_result = [];

    if (array_first.length >= array_second.length)
    {
        array_result = array_first.map(function(num, i, array) {
          return num + (array_second[i] || 0);
        });
    }else{
        array_result = array_second.map(function(num, i, array) {
          return num + (array_first[i] || 0);
        });
    }
    console.log(array_result);
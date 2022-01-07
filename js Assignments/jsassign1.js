var students = [['Physics', 80], ['Che', 77], ['English', 35], ['Maths', 95], ['Electronic', 68]];

var Avgmarks = 0;

for (var i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
        var avg = (Avgmarks/students.length);
}

console.log("Average grade: " + (Avgmarks)/students.length);

        if (avg < 40){
          console.log("Grade : F");      
          } 
        else if (avg < 50) {
                console.log("Grade : D"); 
                  } 
        else if (avg < 60) 
             {
                console.log("Grade : C"); 
        } else if (avg < 65) {
                console.log("Grade : B"); 
        } else if (avg < 100) {
               console.log("Grade : A"); 
}
var user={
  firstName:"Gajanan",
  lastName:"Deshmukh",
  role : "Admin",
  loginCount: 50,
  groceries:[],
  addGroceries:function(value){
    this.groceries.push(value);
  },
  Age : 25,
  getGroceries:function(){
    return  `Hey you have ${this.groceries.length} groceries`;
  }
  };
  /*console.log(user.firstName);
  console.log(user["lastName"]);
  user.Age=35;
  console.log(user.Age);
  console.table(user);*/
  user.addGroceries("coffee");
  user.addGroceries("sugar");
  user.addGroceries("bread");
  console.log(user.getGroceries());
  
  // 17
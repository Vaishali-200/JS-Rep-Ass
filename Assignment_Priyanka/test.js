const one = () => {
  return "Iam one";
}
const two = async () => {
  setTimeout(() => {
    return "Iam two";
  }, 3000);
};

const three = () => {
  return "Iam three";
}

var callMe = () =>{
  var letOne = one();
  console.log(letOne);
  var letTwo = two();
  console.log(letTwo);
  var letThree = three();
  console.log(letThree);
}

callMe();
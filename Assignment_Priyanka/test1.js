const one = () => {
  console.log("Iam one");
}
const two = () => {
  setTimeout(() => {
    console.log("I will execute after 3 seconds");
  }, 3000);
  console.log("I am two");
};

const three = () => {
  console.log("Iam three");
}

one();
two();
three();
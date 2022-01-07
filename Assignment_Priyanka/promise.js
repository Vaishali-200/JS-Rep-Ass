const one = () => {
    return "Iam one";
}
const two = () => {
    return new Promise((resolve, reject)=> {
    setTimeout(() => {
        resolve("Iam two");
    }, 3000);
});
        };
    
const three = () => {
    return "Iam three";
}

const callMe = async() => {
    var letOne = one();
    console.log(letOne);
    var letTwo = await two();
    console.log(letTwo);
    var letThree = three();
    console.log(letThree);

}
callMe();
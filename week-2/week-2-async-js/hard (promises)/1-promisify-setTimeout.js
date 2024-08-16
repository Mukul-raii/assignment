/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
let start = Date.now();
let end;

function wait(n) {
  //function which take n sec as para
  return new Promise((resolve) => {
    //it return a promise

    setTimeout(() => {
      end = Date.now();
      resolve();
    }, n); //in that promise it set timeout the resolve for n ms
  });
}
let timeout = wait(4000); //wait(n)

timeout.then(() => {
  //when the promise get resolve it call the then func
  console.log("promise fullfilled");
});

module.exports = wait;

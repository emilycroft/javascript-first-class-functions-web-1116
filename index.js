var sayHi = function sayHi() {
  console.log("Hi!")
}

function receivesAFunction(sayHi) {
  sayHi()
}

function returnsANamedFunction() {
  var sayHi = function sayHi() {
    console.log("Hi!")
  }
  return sayHi
}

function returnsAnAnonymousFunction() {
  return function() {
    console.log("Hi!")
  }
}

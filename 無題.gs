let tester1 = new TestGasExecutor();

function sample(x){
  return x + 1;
}

class Test_sample{
  test_sample_1(){
    tester1.assertEquals(sample(2), 4);
  }
}

function execute_Test_sample(){
  let failureFuncs = tester1.executeTestGas(Test_sample);
}

// function asdf(name, age, gender=1){
//   let ert = name + gender
//   console.log(name)
//   console.log(age)
//   console.log(gender)
//   console.log(ert)
// }

// function qer(){
//   asdf({name: 3, age: 2})
// }
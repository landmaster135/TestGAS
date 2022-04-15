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

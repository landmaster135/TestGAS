let tester1 = createExecutor();

class Test_test20220507{
  // noraml systems
  test_assertEquals_1_1(){
    const var1 = 3; 
    const var2 = 3;
    tester1.assertEquals(var1, var2);
    return true;
  }
  test_assertEquals_1_2(){
    const var1 = 3; 
    const var2 = 4;
    tester1.assertEquals(var1, var2);
    return true;
  }
}

/**
 * @return {bool} isTestTerminated
*/
function execute_Test_20220507(){
  const funcName = "execute_Test_20220507";
  console.log(`${funcName}: aaaaaaaaaaaaaaaaaaaaaaaaaaaaa`);
  // console.log(Test_utilForTestGas)
  let failureFuncs = tester1.executeTestGas(Test_test20220507);
  console.log(`${funcName}: bbbbbbbbbbbbbbbbbbbbbbbb`);
  return failureFuncs;
}
